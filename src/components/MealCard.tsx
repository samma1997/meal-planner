'use client';

import { useState } from 'react';
import { Meal, CookingMethod } from '@/data/types';

interface MealCardProps {
  meal: Meal;
}

const cookingIcons: Record<CookingMethod, { icon: string; label: string }> = {
  fornelli:    { icon: '🍳', label: 'Fornelli'            },
  friggitrice: { icon: '🌀', label: 'Friggitrice ad aria' },
  microonde:   { icon: '📦', label: 'Microonde'           },
  forno:       { icon: '🔥', label: 'Forno'               },
  nessuna:     { icon: '❄️', label: 'No cottura'          },
};

// Left border accent per tipo pasto — recipe book style
const mealBorderColor: Record<string, string> = {
  colazione: '#F4C430',
  pranzo:    '#6B9E6B',
  spuntino:  '#7BA7C4',
  cena:      '#E8734A',
};

const mealLabels: Record<string, string> = {
  colazione: 'Colazione',
  pranzo:    'Pranzo',
  spuntino:  'Spuntino',
  cena:      'Cena',
};

export default function MealCard({ meal }: MealCardProps) {
  const [expanded, setExpanded] = useState(false);
  const cooking     = cookingIcons[meal.metodo];
  const borderColor = mealBorderColor[meal.tipo] ?? '#E8734A';
  const hasRicetta  = Array.isArray(meal.ricetta) && meal.ricetta.length > 0;

  return (
    <div
      className="rounded-2xl overflow-hidden shadow-sm"
      style={{
        background: '#FFFFFF',
        border: '1px solid #F0E6D8',
        borderLeft: `4px solid ${borderColor}`,
      }}
    >
      {/* Tappable header row */}
      <button
        className="w-full text-left"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        <div className="p-4 flex items-center gap-4">
          {/* Emoji on the left */}
          <div
            className="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
            style={{ background: '#FFF8F0', fontSize: '32px', lineHeight: 1 }}
          >
            {meal.emoji}
          </div>

          {/* Name + method on the right */}
          <div className="flex-1 min-w-0">
            {/* Meal type label */}
            <span
              className="text-xs font-bold uppercase tracking-wide"
              style={{ color: borderColor }}
            >
              {mealLabels[meal.tipo]}
            </span>

            {/* Meal name */}
            <h3
              className="font-black text-lg leading-tight mt-0.5"
              style={{ color: '#2D2016' }}
            >
              {meal.nome}
            </h3>

            {/* Cooking method + time row */}
            <div className="flex items-center gap-2 mt-1.5 flex-wrap">
              <span
                className="text-xs font-medium px-2 py-1 rounded-full"
                style={{ background: '#FBE9E0', color: '#8B7355' }}
              >
                {cooking.icon} {cooking.label}
              </span>
              <span
                className="text-xs font-medium px-2 py-1 rounded-full"
                style={{ background: '#F0E6D8', color: '#8B7355' }}
              >
                {meal.tempoPreparazione} min
              </span>
            </div>
          </div>

          {/* Expand chevron */}
          <div style={{ color: '#8B7355', fontSize: '18px' }}>
            <span
              className="inline-block transition-transform duration-300"
              style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
            >
              ▾
            </span>
          </div>
        </div>

        {/* Expand hint text */}
        {!expanded && (
          <div
            className="px-4 pb-3 text-xs font-medium"
            style={{ color: '#8B7355' }}
          >
            Tocca per vedere la ricetta
          </div>
        )}
      </button>

      {/* Expanded content */}
      {expanded && (
        <div className="expand-enter px-4 pb-5" style={{ borderTop: '1px solid #F0E6D8' }}>

          {/* Ingredients */}
          <h4
            className="text-sm font-bold mt-4 mb-3 flex items-center gap-1.5"
            style={{ color: '#2D2016' }}
          >
            <span>🧾</span> Ingredienti
          </h4>
          <div className="grid grid-cols-2 gap-2 mb-5">
            {meal.ingredienti.map((ing, idx) => (
              <div
                key={idx}
                className="rounded-xl px-3 py-2.5 flex items-start gap-2"
                style={{ background: '#FFF8F0', border: '1px solid #F0E6D8' }}
              >
                <span
                  className="font-black text-sm leading-none mt-0.5 shrink-0"
                  style={{ color: '#E8734A' }}
                >
                  •
                </span>
                <div className="min-w-0">
                  <div
                    className="text-sm font-semibold leading-tight"
                    style={{ color: '#2D2016' }}
                  >
                    {ing.name}
                  </div>
                  <div
                    className="text-xs font-medium mt-0.5"
                    style={{ color: '#8B7355' }}
                  >
                    {ing.quantity}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          {meal.note && (
            <div
              className="rounded-xl p-3 mb-5 flex gap-2"
              style={{ background: '#FFF8F0', border: '1px solid #F0E6D8' }}
            >
              <span className="text-base shrink-0">💡</span>
              <p
                className="text-sm italic leading-relaxed"
                style={{ color: '#8B7355' }}
              >
                {meal.note}
              </p>
            </div>
          )}

          {/* Recipe steps */}
          {hasRicetta && (
            <>
              <h4
                className="text-sm font-bold mb-3 flex items-center gap-1.5"
                style={{ color: '#2D2016' }}
              >
                <span>👩‍🍳</span> Come preparare
              </h4>
              <ol className="space-y-3 mb-5">
                {meal.ricetta.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    {/* Warm numbered circle */}
                    <span
                      className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black leading-none"
                      style={{ background: '#E8734A', color: '#FFFFFF', minWidth: '28px' }}
                    >
                      {idx + 1}
                    </span>
                    <span
                      className="text-sm leading-relaxed pt-0.5"
                      style={{ color: '#2D2016' }}
                    >
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </>
          )}

          {/* Macro info — small and discreet, for Luca */}
          <div
            className="rounded-xl p-3 mt-1"
            style={{ background: '#FFF8F0', border: '1px solid #F0E6D8' }}
          >
            <p
              className="text-xs font-semibold mb-2"
              style={{ color: '#8B7355' }}
            >
              Info nutrizionali
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <span
                className="text-xs font-bold"
                style={{ color: '#2D2016' }}
              >
                {meal.macros.kcal} kcal
              </span>
              <span className="text-xs" style={{ color: '#8B7355' }}>
                P {meal.macros.proteine}g
              </span>
              <span className="text-xs" style={{ color: '#8B7355' }}>
                C {meal.macros.carboidrati}g
              </span>
              <span className="text-xs" style={{ color: '#8B7355' }}>
                G {meal.macros.grassi}g
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
