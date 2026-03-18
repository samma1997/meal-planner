'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { getDayPlan } from '@/data/utils';

interface MealSlot {
  tipo: 'colazione' | 'pranzo' | 'spuntino' | 'cena';
  label: string;
  emoji: string;
  minuteOfDay: number;
}

const MEAL_SLOTS: MealSlot[] = [
  { tipo: 'colazione', label: 'Colazione', emoji: '🌅', minuteOfDay: 7 * 60 + 30 },
  { tipo: 'pranzo',    label: 'Pranzo',    emoji: '🍽️', minuteOfDay: 12 * 60 },
  { tipo: 'spuntino',  label: 'Spuntino',  emoji: '🍎', minuteOfDay: 16 * 60 },
  { tipo: 'cena',      label: 'Cena',      emoji: '🌙', minuteOfDay: 19 * 60 + 30 },
];

const TRIGGER_WINDOW_MINUTES = 2;
const LS_KEY = 'pasti-notif-last';

function todayKey(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function wasSentToday(tipo: string): boolean {
  return localStorage.getItem(`${LS_KEY}-${tipo}`) === todayKey();
}

function markSent(tipo: string): void {
  localStorage.setItem(`${LS_KEY}-${tipo}`, todayKey());
}

function currentMinuteOfDay(): number {
  const now = new Date();
  return now.getHours() * 60 + now.getMinutes();
}

function showLocalNotification(title: string, body: string): void {
  if (typeof Notification === 'undefined' || Notification.permission !== 'granted') return;

  const options: NotificationOptions = {
    body,
    icon: '/meal-planner/icons/icon-192.png',
    badge: '/meal-planner/icons/icon-192.png',
    tag: title,
    silent: false,
  };

  if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
    navigator.serviceWorker.ready.then((reg) => {
      reg.showNotification(title, options);
    });
  } else {
    new Notification(title, options);
  }
}

function notificationsSupported(): boolean {
  return typeof window !== 'undefined' && 'Notification' in window;
}

export default function NotificationManager() {
  const [showBanner, setShowBanner] = useState(false);
  const [notifEnabled, setNotifEnabled] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const checkAndNotify = useCallback(() => {
    if (!notificationsSupported() || Notification.permission !== 'granted') return;

    const nowMinute = currentMinuteOfDay();
    const today = new Date();
    const plan = getDayPlan(today);

    for (const slot of MEAL_SLOTS) {
      if (wasSentToday(slot.tipo)) continue;

      const delta = nowMinute - slot.minuteOfDay;
      if (delta >= 0 && delta < TRIGGER_WINDOW_MINUTES) {
        const meal = plan[slot.tipo];
        const title = `${slot.emoji} ${slot.label}`;
        const body = `Oggi: ${meal.emoji} ${meal.nome}`;
        showLocalNotification(title, body);
        markSent(slot.tipo);
      }
    }
  }, []);

  useEffect(() => {
    if (!notificationsSupported()) return;

    const current = Notification.permission;

    if (current === 'granted') {
      setNotifEnabled(true);
      checkAndNotify();
      intervalRef.current = setInterval(checkAndNotify, 60_000);
    } else if (current === 'default') {
      // Show banner after a short delay so it doesn't overwhelm
      const timer = setTimeout(() => setShowBanner(true), 3000);
      return () => clearTimeout(timer);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [checkAndNotify, notifEnabled]);

  const requestPermission = async () => {
    if (!notificationsSupported()) return;

    const result = await Notification.requestPermission();
    if (result === 'granted') {
      setNotifEnabled(true);
      setShowBanner(false);
      checkAndNotify();
      intervalRef.current = setInterval(checkAndNotify, 60_000);
    } else {
      setShowBanner(false);
    }
  };

  const dismiss = () => setShowBanner(false);

  if (!showBanner) return null;

  return (
    <div className="mx-auto max-w-2xl px-4 pt-2">
      <div
        className="rounded-2xl p-4 shadow-sm"
        style={{ background: '#FBE9E0', border: '1px solid #F0E6D8' }}
      >
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-bold" style={{ color: '#2D2016' }}>
              🔔 Vuoi che ti ricordi cosa preparare?
            </p>
            <p className="text-xs mt-0.5" style={{ color: '#8B7355' }}>
              Ti avviso a colazione, pranzo, merenda e cena
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={requestPermission}
              className="text-xs font-bold px-3 py-2 rounded-xl shadow active:scale-95 transition-transform"
              style={{ background: '#E8734A', color: '#FFFFFF' }}
            >
              Attiva
            </button>
            <button
              onClick={dismiss}
              aria-label="Chiudi"
              className="text-lg leading-none px-1 opacity-60 hover:opacity-100 transition-opacity"
              style={{ color: '#8B7355' }}
            >
              ✕
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
