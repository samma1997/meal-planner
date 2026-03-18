'use client';

import { useState, useMemo } from 'react';
import { Meal } from '@/data/types';
import { findMatchingMeals, formatDateKey, saveSwap } from '@/data/utils';

// ─── Ingredient categories ────────────────────────────────────────────────────

interface IngredientCategory {
  icon: string;
  label: string;
  preselected?: boolean;
  items: string[];
}

const CATEGORIES: IngredientCategory[] = [
  {
    icon: '🍗',
    label: 'Proteine',
    items: [
      'Petto di pollo',
      'Salmone',
      'Tonno in scatola',
      'Fesa di tacchino',
      'Uova',
    ],
  },
  {
    icon: '🍝',
    label: 'Carboidrati',
    items: [
      'Pasta',
      'Riso basmati',
      'Gnocchi',
      'Pane integrale',
      'Farina d\'avena',
    ],
  },
  {
    icon: '🥬',
    label: 'Verdure',
    items: [
      'Zucchine surgelate',
      'Broccoli surgelati',
      'Fagiolini surgelati',
      'Piselli surgelati',
      'Verdure miste surgelate',
      'Insalata mista',
      'Pomodorini',
    ],
  },
  {
    icon: '🧴',
    label: 'Condimenti',
    preselected: true,
    items: [
      'Passata di pomodoro',
      'Pesto',
      'Olio EVO',
      'Sale',
      'Curcuma',
    ],
  },
  {
    icon: '🍌',
    label: 'Altro',
    items: [
      'Banana',
      'Mela',
      'Frutti di bosco',
      'Albumi',
      'Proteine in polvere',
      'Formaggio spalmabile',
      'Crema proteica',
      'Burro d\'arachidi',
      'Miele',
    ],
  },
];

// Pre-selected items (condiments)
const DEFAULT_SELECTED: string[] = CATEGORIES.filter(c => c.preselected).flatMap(c => c.items);

// Badge label per tipo pasto
const TIPO_LABELS: Record<string, { label: string; color: string }> = {
  colazione: { label: 'Colazione', color: '#F4C430' },
  pranzo:    { label: 'Pranzo',    color: '#6B9E6B' },
  spuntino:  { label: 'Spuntino',  color: '#7BA7C4' },
  cena:      { label: 'Cena',      color: '#E8734A' },
};

// ─── Page component ───────────────────────────────────────────────────────────

export default function FrigoPage() {
  const [selected, setSelected]   = useState<string[]>(DEFAULT_SELECTED);
  const [swappedId, setSwappedId] = useState<string | null>(null);

  // Toggle an ingredient chip
  const toggle = (name: string, isCondiment: boolean) => {
    if (isCondiment) return; // condiments are always active
    setSelected(prev =>
      prev.includes(name) ? prev.filter(n => n !== name) : [...prev, name]
    );
  };

  // Compute matches whenever selection changes
  const { exact, nearMatch } = useMemo(
    () => findMatchingMeals(selected),
    [selected]
  );

  // "Use this meal" — swap it into today's slot
  const useMeal = (meal: Meal) => {
    const dateKey = formatDateKey(new Date());
    saveSwap(dateKey, meal.tipo, meal.id);
    setSwappedId(meal.id);
    // Reset after 2s so the user can swap another
    setTimeout(() => setSwappedId(null), 2000);
  };

  return (
    <div className="space-y-6 page-enter">
      {/* Header */}
      <div className="pt-1">
        <h1 className="text-3xl font-black leading-tight" style={{ color: '#2D2016' }}>
          Cosa c&apos;è in frigo, Giusy? 🧊
        </h1>
        <p className="text-base font-medium mt-1" style={{ color: '#8B7355' }}>
          Tocca gli ingredienti che hai a casa
        </p>
      </div>

      {/* Ingredient grid */}
      <div className="space-y-5">
        {CATEGORIES.map(cat => (
          <div key={cat.label}>
            {/* Category header */}
            <div className="flex items-center gap-2 mb-3">
              <span style={{ fontSize: '20px' }}>{cat.icon}</span>
              <h2 className="text-sm font-black uppercase tracking-wider" style={{ color: '#2D2016' }}>
                {cat.label}
              </h2>
              {cat.preselected && (
                <span
                  className="text-xs font-semibold px-2 py-0.5 rounded-full"
                  style={{ background: '#F0E6D8', color: '#8B7355' }}
                >
                  sempre disponibili
                </span>
              )}
            </div>

            {/* Pills */}
            <div className="flex flex-wrap gap-2">
              {cat.items.map(item => {
                const isCondiment = !!cat.preselected;
                const isActive    = selected.includes(item);
                return (
                  <button
                    key={item}
                    onClick={() => toggle(item, isCondiment)}
                    className="flex items-center gap-1.5 px-4 rounded-full font-semibold text-sm transition-all duration-150 active:scale-95"
                    style={{
                      minHeight: '44px',
                      background: isActive ? '#E8734A' : '#FFFFFF',
                      color: isActive ? '#FFFFFF' : '#2D2016',
                      border: isActive ? '1.5px solid #E8734A' : '1.5px solid #F0E6D8',
                      cursor: isCondiment ? 'default' : 'pointer',
                      opacity: isCondiment ? 0.85 : 1,
                    }}
                  >
                    {isActive && <span style={{ fontSize: '12px' }}>✓</span>}
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div style={{ height: '1px', background: '#F0E6D8' }} />

      {/* Results */}
      <div>
        {exact.length === 0 && nearMatch.length === 0 ? (
          <div
            className="rounded-2xl p-5 text-center"
            style={{ background: '#FFFFFF', border: '1px solid #F0E6D8' }}
          >
            <div style={{ fontSize: '40px' }}>🥺</div>
            <p className="font-bold mt-2" style={{ color: '#2D2016' }}>
              Nessun piatto trovato
            </p>
            <p className="text-sm mt-1" style={{ color: '#8B7355' }}>
              Aggiungi altri ingredienti per trovare qualcosa di buono!
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <h2 className="text-xl font-black" style={{ color: '#2D2016' }}>
              Puoi preparare:
            </h2>

            {/* Exact matches */}
            {exact.length > 0 && (
              <div className="space-y-3">
                {exact.map(meal => (
                  <MealResultCard
                    key={meal.id}
                    meal={meal}
                    missing={[]}
                    onUse={useMeal}
                    justSwapped={swappedId === meal.id}
                  />
                ))}
              </div>
            )}

            {/* Near matches */}
            {nearMatch.length > 0 && (
              <>
                <h3 className="text-base font-bold mt-2" style={{ color: '#8B7355' }}>
                  Quasi pronta — ti manca solo un ingrediente:
                </h3>
                <div className="space-y-3">
                  {nearMatch.map(({ meal, missing }) => (
                    <MealResultCard
                      key={meal.id}
                      meal={meal}
                      missing={missing}
                      onUse={useMeal}
                      justSwapped={swappedId === meal.id}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </div>

      {/* Bottom spacer for nav */}
      <div style={{ height: '8px' }} />
    </div>
  );
}

// ─── Sub-component: result card ───────────────────────────────────────────────

interface MealResultCardProps {
  meal: Meal;
  missing: string[];
  onUse: (meal: Meal) => void;
  justSwapped: boolean;
}

function MealResultCard({ meal, missing, onUse, justSwapped }: MealResultCardProps) {
  const tipo = TIPO_LABELS[meal.tipo] ?? { label: meal.tipo, color: '#E8734A' };

  return (
    <div
      className="rounded-2xl overflow-hidden shadow-sm"
      style={{ background: '#FFFFFF', border: '1px solid #F0E6D8' }}
    >
      <div className="p-4 flex items-start gap-3">
        {/* Emoji */}
        <div
          className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ background: '#FFF8F0', fontSize: '26px', lineHeight: 1 }}
        >
          {meal.emoji}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          {/* Type badge */}
          <span
            className="text-xs font-bold uppercase tracking-wide"
            style={{ color: tipo.color }}
          >
            {tipo.label}
          </span>

          {/* Meal name */}
          <p className="font-black text-base leading-tight mt-0.5" style={{ color: '#2D2016' }}>
            {meal.nome}
          </p>

          {/* Missing ingredient pill */}
          {missing.length > 0 && (
            <div className="mt-2 flex items-center gap-1.5 flex-wrap">
              <span className="text-xs" style={{ color: '#8B7355' }}>Ti manca solo:</span>
              {missing.map(m => (
                <span
                  key={m}
                  className="text-xs font-semibold px-2 py-0.5 rounded-full"
                  style={{ background: '#FBE9E0', color: '#E8734A' }}
                >
                  {m}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* CTA button */}
      <div className="px-4 pb-4">
        <button
          onClick={() => onUse(meal)}
          className="w-full rounded-xl font-bold text-sm py-3 transition-all duration-150 active:scale-98"
          style={{
            background: justSwapped ? '#6B9E6B' : '#E8734A',
            color: '#FFFFFF',
            minHeight: '44px',
          }}
        >
          {justSwapped ? '✓ Aggiunto al piano di oggi!' : 'Usa questo piatto oggi'}
        </button>
      </div>
    </div>
  );
}
