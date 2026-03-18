'use client';

import { useState, useEffect } from 'react';
import { Badge, UserProgress } from '@/data/types';

// ─── Badge definitions ────────────────────────────────────────────────────────

const ALL_BADGES: Badge[] = [
  {
    id: 'primo_giorno',
    nome: 'Primo passo!',
    emoji: '🌱',
    descrizione: 'Hai completato il tuo primo giorno di piano pasti.',
    condizione: 'giorni_consecutivi',
    valore: 1,
  },
  {
    id: 'tre_giorni',
    nome: 'In forma!',
    emoji: '🔥',
    descrizione: '3 giorni di fila completati. Brava Giusy!',
    condizione: 'giorni_consecutivi',
    valore: 3,
  },
  {
    id: 'settimana',
    nome: 'Una settimana intera!',
    emoji: '🏆',
    descrizione: 'Hai completato una settimana completa. Fantastico!',
    condizione: 'giorni_consecutivi',
    valore: 7,
  },
  {
    id: 'dieci_giorni',
    nome: 'Costanza!',
    emoji: '💪',
    descrizione: 'Ben 10 giorni di fila. Sei una campionessa!',
    condizione: 'giorni_consecutivi',
    valore: 10,
  },
  {
    id: 'venti_pasti',
    nome: 'Cuoca provetta!',
    emoji: '👩‍🍳',
    descrizione: 'Hai preparato 20 pasti con la tua cucina.',
    condizione: 'pasti_completati',
    valore: 20,
  },
  {
    id: 'cinquanta_pasti',
    nome: 'Chef di casa!',
    emoji: '🍽️',
    descrizione: '50 pasti preparati. La cucina ti appartiene!',
    condizione: 'pasti_completati',
    valore: 50,
  },
  {
    id: 'prima_settimana_completa',
    nome: 'Piano rispettato!',
    emoji: '📋',
    descrizione: 'Prima settimana di piano completata al 100%.',
    condizione: 'settimane_complete',
    valore: 1,
  },
  {
    id: 'tre_settimane',
    nome: 'Abitudine sana!',
    emoji: '🌟',
    descrizione: 'Tre settimane complete. Questa è diventata un abitudine!',
    condizione: 'settimane_complete',
    valore: 3,
  },
  {
    id: 'prima_spesa',
    nome: 'Spesa completata!',
    emoji: '🛒',
    descrizione: 'Hai completato la tua prima lista della spesa.',
    condizione: 'lista_spesa',
    valore: 1,
  },
  {
    id: 'cinque_spese',
    nome: 'Organizzata!',
    emoji: '🎯',
    descrizione: 'Cinque liste della spesa completate. Sei bravissima!',
    condizione: 'lista_spesa',
    valore: 5,
  },
];

// ─── Progress storage helpers ─────────────────────────────────────────────────

const PROGRESS_KEY = 'giusy-progress';

function loadProgress(): UserProgress {
  if (typeof window === 'undefined') return emptyProgress();
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    if (raw) return JSON.parse(raw) as UserProgress;
  } catch {
    // ignore
  }
  return emptyProgress();
}

function emptyProgress(): UserProgress {
  return {
    giorniCompletati:    0,
    pastiCompletati:     0,
    settimaneComplete:   0,
    listeSpesaComplete:  0,
    giorniConsecutivi:   0,
    ultimoGiorno:        '',
    badgeSbloccati:      [],
  };
}

function saveProgress(p: UserProgress): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(p));
}

function todayKey(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function yesterdayKey(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function checkBadges(progress: UserProgress): UserProgress {
  const newlyUnlocked: string[] = [];

  for (const badge of ALL_BADGES) {
    if (progress.badgeSbloccati.includes(badge.id)) continue;

    let unlocked = false;
    if (badge.condizione === 'giorni_consecutivi' && progress.giorniConsecutivi >= badge.valore) unlocked = true;
    if (badge.condizione === 'pasti_completati'   && progress.pastiCompletati   >= badge.valore) unlocked = true;
    if (badge.condizione === 'settimane_complete'  && progress.settimaneComplete  >= badge.valore) unlocked = true;
    if (badge.condizione === 'lista_spesa'         && progress.listeSpesaComplete >= badge.valore) unlocked = true;

    if (unlocked) newlyUnlocked.push(badge.id);
  }

  if (newlyUnlocked.length === 0) return progress;
  return { ...progress, badgeSbloccati: [...progress.badgeSbloccati, ...newlyUnlocked] };
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function BadgePage() {
  const [mounted,         setMounted]         = useState(false);
  const [progress,        setProgress]        = useState<UserProgress>(emptyProgress());
  const [recentlyUnlocked, setRecentlyUnlocked] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    setProgress(loadProgress());
  }, []);

  if (!mounted) {
    return (
      <div className="space-y-4 page-enter">
        <div className="skeleton h-9 w-56" />
        <div className="skeleton h-24 w-full rounded-2xl" />
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="skeleton h-20 w-full rounded-2xl" />
        ))}
      </div>
    );
  }

  const completaGiorno = () => {
    const today = todayKey();
    const yesterday = yesterdayKey();

    setProgress(prev => {
      if (prev.ultimoGiorno === today) return prev; // already done today

      const wasYesterday = prev.ultimoGiorno === yesterday;
      const nuoviConsecutivi = wasYesterday ? prev.giorniConsecutivi + 1 : 1;
      const nuoviGiorni      = prev.giorniCompletati + 1;
      const nuoviPasti       = prev.pastiCompletati + 4;
      const nuoveSettimane   = nuoviGiorni % 7 === 0 ? prev.settimaneComplete + 1 : prev.settimaneComplete;

      const updated = checkBadges({
        ...prev,
        giorniCompletati:   nuoviGiorni,
        pastiCompletati:    nuoviPasti,
        settimaneComplete:  nuoveSettimane,
        giorniConsecutivi:  nuoviConsecutivi,
        ultimoGiorno:       today,
      });

      // Find most recently unlocked
      const newBadge = updated.badgeSbloccati.find(id => !prev.badgeSbloccati.includes(id));
      if (newBadge) setRecentlyUnlocked(newBadge);

      saveProgress(updated);
      return updated;
    });
  };

  const todayAlreadyDone = progress.ultimoGiorno === todayKey();

  return (
    <div className="space-y-5 page-enter">
      {/* Header */}
      <div className="pt-1">
        <h1 className="text-2xl font-black" style={{ color: '#2D2016' }}>
          I Tuoi Traguardi, Giusy! 🏅
        </h1>
        <p className="text-sm mt-1" style={{ color: '#8B7355' }}>
          Ogni giorno conta. Continua così!
        </p>
      </div>

      {/* Stats card */}
      <div
        className="rounded-2xl p-4 shadow-sm"
        style={{ background: '#FFFFFF', border: '1px solid #F0E6D8' }}
      >
        <h2
          className="text-sm font-bold uppercase tracking-wide mb-4"
          style={{ color: '#8B7355' }}
        >
          I tuoi numeri
        </h2>
        <div className="grid grid-cols-2 gap-3">
          <div
            className="rounded-xl p-3 text-center"
            style={{ background: '#FBE9E0' }}
          >
            <div className="text-3xl font-black" style={{ color: '#E8734A' }}>
              {progress.giorniCompletati}
            </div>
            <div className="text-xs font-medium mt-0.5" style={{ color: '#8B7355' }}>
              Giorni completati
            </div>
          </div>
          <div
            className="rounded-xl p-3 text-center"
            style={{ background: '#F0F7F0' }}
          >
            <div className="text-3xl font-black" style={{ color: '#6B9E6B' }}>
              {progress.giorniConsecutivi}
            </div>
            <div className="text-xs font-medium mt-0.5" style={{ color: '#8B7355' }}>
              Giorni di fila
            </div>
          </div>
          <div
            className="rounded-xl p-3 text-center"
            style={{ background: '#FFF8F0' }}
          >
            <div className="text-3xl font-black" style={{ color: '#2D2016' }}>
              {progress.pastiCompletati}
            </div>
            <div className="text-xs font-medium mt-0.5" style={{ color: '#8B7355' }}>
              Pasti preparati
            </div>
          </div>
          <div
            className="rounded-xl p-3 text-center"
            style={{ background: '#FBE9E0' }}
          >
            <div className="text-3xl font-black" style={{ color: '#E8734A' }}>
              {progress.badgeSbloccati.length}
            </div>
            <div className="text-xs font-medium mt-0.5" style={{ color: '#8B7355' }}>
              Badge sbloccati
            </div>
          </div>
        </div>
      </div>

      {/* Complete day button */}
      <button
        onClick={completaGiorno}
        disabled={todayAlreadyDone}
        className="w-full py-4 rounded-2xl font-black text-base shadow-sm active:scale-[0.98] transition-all"
        style={{
          background: todayAlreadyDone ? '#F0E6D8' : '#E8734A',
          color: todayAlreadyDone ? '#8B7355' : '#FFFFFF',
          cursor: todayAlreadyDone ? 'default' : 'pointer',
        }}
      >
        {todayAlreadyDone
          ? 'Giornata completata! ✓'
          : 'Completa la giornata di oggi!'}
      </button>

      {/* Recently unlocked badge */}
      {recentlyUnlocked && (() => {
        const badge = ALL_BADGES.find(b => b.id === recentlyUnlocked);
        if (!badge) return null;
        return (
          <div
            className="rounded-2xl p-4 badge-glow shadow-sm"
            style={{ background: '#FBE9E0', border: '2px solid #E8734A' }}
          >
            <div className="flex items-center gap-3">
              <span style={{ fontSize: '40px' }}>{badge.emoji}</span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide" style={{ color: '#E8734A' }}>
                  Nuovo traguardo!
                </p>
                <p className="text-base font-black" style={{ color: '#2D2016' }}>
                  {badge.nome}
                </p>
                <p className="text-sm" style={{ color: '#8B7355' }}>
                  {badge.descrizione}
                </p>
              </div>
            </div>
          </div>
        );
      })()}

      {/* Badge grid */}
      <div>
        <h2
          className="text-sm font-bold uppercase tracking-wide mb-3"
          style={{ color: '#8B7355' }}
        >
          Tutti i traguardi
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {ALL_BADGES.map(badge => {
            const unlocked = progress.badgeSbloccati.includes(badge.id);
            const isRecent = recentlyUnlocked === badge.id;

            let hint = '';
            if (!unlocked) {
              if (badge.condizione === 'giorni_consecutivi') {
                hint = `Completa ${badge.valore} giorni di fila per sbloccare`;
              } else if (badge.condizione === 'pasti_completati') {
                hint = `Prepara ${badge.valore} pasti per sbloccare`;
              } else if (badge.condizione === 'settimane_complete') {
                hint = `Completa ${badge.valore} settimana${badge.valore > 1 ? 'e' : ''} per sbloccare`;
              } else if (badge.condizione === 'lista_spesa') {
                hint = `Completa ${badge.valore} lista${badge.valore > 1 ? 'e' : ''} della spesa per sbloccare`;
              }
            }

            return (
              <div
                key={badge.id}
                className={`rounded-2xl p-4 shadow-sm ${isRecent ? 'badge-glow' : ''}`}
                style={{
                  background: unlocked ? '#FFFFFF' : '#FFF8F0',
                  border: unlocked
                    ? (isRecent ? '2px solid #E8734A' : '1px solid #F0E6D8')
                    : '1px dashed #F0E6D8',
                  opacity: unlocked ? 1 : 0.75,
                }}
              >
                {/* Emoji */}
                <div
                  className="text-4xl mb-2 text-center"
                  style={{
                    filter: unlocked ? 'none' : 'grayscale(100%)',
                    opacity: unlocked ? 1 : 0.4,
                  }}
                >
                  {unlocked ? badge.emoji : '???'}
                </div>

                {/* Name */}
                <p
                  className="text-sm font-black text-center leading-tight"
                  style={{ color: unlocked ? '#2D2016' : '#8B7355' }}
                >
                  {unlocked ? badge.nome : '???'}
                </p>

                {/* Description / hint */}
                <p
                  className="text-xs text-center mt-1 leading-snug"
                  style={{ color: '#8B7355' }}
                >
                  {unlocked ? badge.descrizione : hint}
                </p>

                {/* Unlocked badge */}
                {unlocked && (
                  <div className="flex justify-center mt-2">
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded-full"
                      style={{ background: '#FBE9E0', color: '#E8734A' }}
                    >
                      Sbloccato!
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="h-4" />
    </div>
  );
}
