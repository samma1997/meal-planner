'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { getDayPlan } from '@/data/utils';

// ─── Types ────────────────────────────────────────────────────────────────────

type NotificationPermission = 'default' | 'granted' | 'denied';

interface MealSlot {
  tipo: 'colazione' | 'pranzo' | 'spuntino' | 'cena';
  label: string;
  emoji: string;
  /** Minutes from midnight */
  minuteOfDay: number;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const MEAL_SLOTS: MealSlot[] = [
  { tipo: 'colazione', label: 'Colazione', emoji: '🌅', minuteOfDay: 7 * 60 + 30 },   // 07:30
  { tipo: 'pranzo',    label: 'Pranzo',    emoji: '🍽️', minuteOfDay: 12 * 60 },        // 12:00
  { tipo: 'spuntino',  label: 'Spuntino',  emoji: '🍎', minuteOfDay: 16 * 60 },        // 16:00
  { tipo: 'cena',      label: 'Cena',      emoji: '🌙', minuteOfDay: 19 * 60 + 30 },   // 19:30
];

/** How many minutes before the target time we start showing the notification */
const TRIGGER_WINDOW_MINUTES = 1;
/** localStorage key prefix for last-sent timestamps */
const LS_KEY = 'pasti-notif-last';

// ─── Helpers ──────────────────────────────────────────────────────────────────

function todayKey(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function getLastSent(tipo: string): string | null {
  return localStorage.getItem(`${LS_KEY}-${tipo}`);
}

function markSent(tipo: string): void {
  localStorage.setItem(`${LS_KEY}-${tipo}`, todayKey());
}

function wasSentToday(tipo: string): boolean {
  return getLastSent(tipo) === todayKey();
}

function currentMinuteOfDay(): number {
  const now = new Date();
  return now.getHours() * 60 + now.getMinutes();
}

function showLocalNotification(title: string, body: string): void {
  if (Notification.permission !== 'granted') return;

  const options: NotificationOptions = {
    body,
    icon: '/meal-planner/icons/icon-192.png',
    badge: '/meal-planner/icons/icon-192.png',
    // tag prevents duplicate notifications for the same slot
    tag: title,
    silent: false,
  };

  // Prefer SW-based notification (works when tab is in background)
  if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
    navigator.serviceWorker.ready.then((reg) => {
      reg.showNotification(title, options);
    });
  } else {
    new Notification(title, options);
  }
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function NotificationManager() {
  const [permission, setPermission] = useState<NotificationPermission>('default');
  const [visible, setVisible] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Check if we should fire any notification right now
  const checkAndNotify = useCallback(() => {
    if (Notification.permission !== 'granted') return;

    const nowMinute = currentMinuteOfDay();
    const today = new Date();
    const plan = getDayPlan(today);

    for (const slot of MEAL_SLOTS) {
      if (wasSentToday(slot.tipo)) continue;

      const delta = nowMinute - slot.minuteOfDay;
      // Fire if we are within [0, TRIGGER_WINDOW_MINUTES) minutes past the target
      if (delta >= 0 && delta < TRIGGER_WINDOW_MINUTES) {
        const meal = plan[slot.tipo];
        const title = `${slot.emoji} ${slot.label}`;
        const body = `Oggi: ${meal.emoji} ${meal.nome} — ${meal.macros.kcal} kcal`;
        showLocalNotification(title, body);
        markSent(slot.tipo);
      }
    }
  }, []);

  // On mount: read persisted permission state and check for missed notifications
  useEffect(() => {
    if (typeof window === 'undefined' || !('Notification' in window)) return;

    const current = Notification.permission as NotificationPermission;
    setPermission(current);

    // Show the request button only if not yet decided
    if (current === 'default') {
      setVisible(true);
    }

    if (current === 'granted') {
      // Catch up on any notifications missed while the tab was closed
      checkAndNotify();
      // Start the per-minute polling interval
      intervalRef.current = setInterval(checkAndNotify, 60_000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [checkAndNotify]);

  const requestPermission = async () => {
    if (!('Notification' in window)) return;

    const result = await Notification.requestPermission();
    const perm = result as NotificationPermission;
    setPermission(perm);

    if (perm === 'granted') {
      setVisible(false);
      checkAndNotify();
      intervalRef.current = setInterval(checkAndNotify, 60_000);
    } else {
      setVisible(false);
    }
  };

  // Nothing to render once permission is resolved or API is absent
  if (!visible || typeof window === 'undefined' || !('Notification' in window)) return null;
  if (permission !== 'default') return null;

  return (
    <div className="mx-auto max-w-2xl px-4 pt-2">
      <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4 flex items-center justify-between gap-3 shadow-sm">
        <div>
          <p className="text-sm font-bold text-orange-800">Promemoria pasti</p>
          <p className="text-xs text-orange-600 mt-0.5">
            Ricevi un promemoria a colazione, pranzo, spuntino e cena
          </p>
        </div>
        <button
          onClick={requestPermission}
          className="shrink-0 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold px-3 py-2 rounded-xl shadow active:scale-95 transition-transform whitespace-nowrap"
        >
          Attiva notifiche 🔔
        </button>
      </div>
    </div>
  );
}
