'use client';

import { useState } from 'react';
import { Meal, CookingMethod } from '@/data/types';

interface MealCardProps {
  meal: Meal;
}

const cookingIcons: Record<CookingMethod, { icon: string; label: string; color: string }> = {
  fornelli:    { icon: '🍳', label: 'Fornelli',           color: 'bg-orange-100 text-orange-700' },
  friggitrice: { icon: '🌀', label: 'Friggitrice ad aria', color: 'bg-sky-100 text-sky-700'      },
  microonde:   { icon: '📦', label: 'Microonde',          color: 'bg-violet-100 text-violet-700' },
  forno:       { icon: '🔥', label: 'Forno',              color: 'bg-red-100 text-red-700'       },
  nessuna:     { icon: '❄️', label: 'No cottura',         color: 'bg-cyan-100 text-cyan-700'     },
};

const mealStyles: Record<string, {
  gradient: string;
  border: string;
  badge: string;
  title: string;
  headerGradient: string;
}> = {
  colazione: {
    gradient: 'from-amber-50 to-orange-50',
    border: 'border-amber-200',
    badge: 'bg-amber-100 text-amber-700',
    title: 'text-amber-900',
    headerGradient: 'from-amber-400 to-orange-400',
  },
  pranzo: {
    gradient: 'from-green-50 to-emerald-50',
    border: 'border-green-200',
    badge: 'bg-green-100 text-green-700',
    title: 'text-green-900',
    headerGradient: 'from-green-400 to-emerald-400',
  },
  spuntino: {
    gradient: 'from-sky-50 to-blue-50',
    border: 'border-sky-200',
    badge: 'bg-sky-100 text-sky-700',
    title: 'text-sky-900',
    headerGradient: 'from-sky-400 to-blue-400',
  },
  cena: {
    gradient: 'from-purple-50 to-violet-50',
    border: 'border-purple-200',
    badge: 'bg-purple-100 text-purple-700',
    title: 'text-purple-900',
    headerGradient: 'from-purple-400 to-violet-500',
  },
};

const mealLabels: Record<string, string> = {
  colazione: 'Colazione',
  pranzo:    'Pranzo',
  spuntino:  'Spuntino',
  cena:      'Cena',
};

export default function MealCard({ meal }: MealCardProps) {
  const [expanded, setExpanded] = useState(false);
  const style   = mealStyles[meal.tipo] ?? mealStyles.cena;
  const cooking = cookingIcons[meal.metodo];

  return (
    <div
      className={`rounded-3xl border-2 bg-gradient-to-br ${style.gradient} ${style.border} overflow-hidden shadow-sm transition-all duration-200 active:scale-[0.98]`}
    >
      {/* Tappable header */}
      <button
        className="w-full text-left"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        {/* Big emoji banner */}
        <div className={`bg-gradient-to-r ${style.headerGradient} py-5 flex items-center justify-center`}>
          <span
            className="leading-none drop-shadow-sm"
            style={{ fontSize: '72px', lineHeight: 1 }}
          >
            {meal.emoji}
          </span>
        </div>

        {/* Card body */}
        <div className="p-4">
          {/* Meal type badge + time */}
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full ${style.badge}`}>
              {mealLabels[meal.tipo]}
            </span>
            <span className={`text-xs font-medium px-2 py-1 rounded-full ${cooking.color}`}>
              {cooking.icon} {cooking.label}
            </span>
            <span className="ml-auto text-xs text-gray-400 font-medium">{meal.tempoPreparazione} min</span>
          </div>

          {/* Meal name */}
          <h3 className={`font-black text-lg leading-tight mb-3 ${style.title}`}>{meal.nome}</h3>

          {/* Macro pills row */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 bg-white/70 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-sm">
              <span className="text-lg font-black text-gray-800">{meal.macros.kcal}</span>
              <span className="text-xs text-gray-500 font-medium">kcal</span>
            </div>
            <div className="flex items-center gap-1 bg-blue-100/80 rounded-full px-2.5 py-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-500 inline-block shrink-0"></span>
              <span className="text-xs text-blue-700 font-semibold">{meal.macros.proteine}g P</span>
            </div>
            <div className="flex items-center gap-1 bg-yellow-100/80 rounded-full px-2.5 py-1.5">
              <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block shrink-0"></span>
              <span className="text-xs text-yellow-700 font-semibold">{meal.macros.carboidrati}g C</span>
            </div>
            <div className="flex items-center gap-1 bg-red-100/80 rounded-full px-2.5 py-1.5">
              <span className="w-2 h-2 rounded-full bg-red-400 inline-block shrink-0"></span>
              <span className="text-xs text-red-600 font-semibold">{meal.macros.grassi}g G</span>
            </div>
          </div>

          {/* Expand indicator */}
          <div className="flex items-center justify-center mt-3">
            <div className="flex items-center gap-1 text-xs text-gray-400 font-medium">
              <span>{expanded ? 'Nascondi dettagli' : 'Vedi ingredienti'}</span>
              <span
                className="inline-block transition-transform duration-300"
                style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
              >
                ▾
              </span>
            </div>
          </div>
        </div>
      </button>

      {/* Expanded content */}
      {expanded && (
        <div className="expand-enter border-t border-white/60 mx-4 pt-4 pb-5">
          {/* Ingredients grid */}
          <h4 className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-1.5">
            <span>🧾</span> Ingredienti
          </h4>
          <div className="grid grid-cols-2 gap-2 mb-4">
            {meal.ingredienti.map((ing, idx) => (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur-sm rounded-2xl px-3 py-2.5 flex items-start gap-2 shadow-sm"
              >
                <span className="text-orange-400 font-black text-sm leading-none mt-0.5">•</span>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-gray-700 leading-tight">{ing.name}</div>
                  <div className="text-xs text-gray-400 font-medium mt-0.5">{ing.quantity}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          {meal.note && (
            <div className="bg-white/70 rounded-2xl p-3 mb-4 flex gap-2">
              <span className="text-base">💡</span>
              <p className="text-xs text-gray-600 italic leading-relaxed">{meal.note}</p>
            </div>
          )}

          {/* Macro bars */}
          <div className="space-y-3 bg-white/60 rounded-2xl p-3">
            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-blue-600 font-bold">Proteine</span>
                <span className="text-blue-600 font-black">{meal.macros.proteine}g</span>
              </div>
              <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-700"
                  style={{ width: `${Math.min(100, (meal.macros.proteine / 50) * 100)}%` }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-yellow-600 font-bold">Carboidrati</span>
                <span className="text-yellow-600 font-black">{meal.macros.carboidrati}g</span>
              </div>
              <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-yellow-300 to-yellow-500 transition-all duration-700"
                  style={{ width: `${Math.min(100, (meal.macros.carboidrati / 95) * 100)}%` }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-red-500 font-bold">Grassi</span>
                <span className="text-red-500 font-black">{meal.macros.grassi}g</span>
              </div>
              <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-red-300 to-red-500 transition-all duration-700"
                  style={{ width: `${Math.min(100, (meal.macros.grassi / 30) * 100)}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
