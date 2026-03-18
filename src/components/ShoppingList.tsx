'use client';

import { useState, useEffect } from 'react';
import { ShoppingItem } from '@/data/types';

interface ShoppingListProps {
  items: ShoppingItem[];
  weekNum: number;
  totalCost: number;
}

const categoryIcons: Record<string, string> = {
  Proteine:    '🥩',
  Carboidrati: '🌾',
  Verdure:     '🥦',
  Latticini:   '🥛',
  Altro:       '🧂',
};

const categoryBorderColors: Record<string, string> = {
  Proteine:    'border-l-red-400',
  Carboidrati: 'border-l-amber-400',
  Verdure:     'border-l-green-400',
  Latticini:   'border-l-blue-400',
  Altro:       'border-l-gray-400',
};

const categoryBgColors: Record<string, string> = {
  Proteine:    'bg-red-50',
  Carboidrati: 'bg-amber-50',
  Verdure:     'bg-green-50',
  Latticini:   'bg-blue-50',
  Altro:       'bg-gray-50',
};

const categoryHeaderColors: Record<string, string> = {
  Proteine:    'text-red-700',
  Carboidrati: 'text-amber-700',
  Verdure:     'text-green-700',
  Latticini:   'text-blue-700',
  Altro:       'text-gray-700',
};

export default function ShoppingList({ items, weekNum, totalCost }: ShoppingListProps) {
  const [checked, setChecked]           = useState<Record<string, boolean>>({});
  const [justCompleted, setJustCompleted] = useState(false);
  const [prevPct, setPrevPct]           = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem(`shopping-week-${weekNum}`);
    if (saved) {
      try { setChecked(JSON.parse(saved)); } catch { setChecked({}); }
    }
  }, [weekNum]);

  const toggle = (itemName: string) => {
    setChecked(prev => {
      const updated = { ...prev, [itemName]: !prev[itemName] };
      localStorage.setItem(`shopping-week-${weekNum}`, JSON.stringify(updated));

      const newBoughtCount = Object.values(updated).filter(Boolean).length;
      const newPct = items.length > 0 ? Math.round((newBoughtCount / items.length) * 100) : 0;
      if (newPct === 100 && prevPct < 100) {
        setJustCompleted(true);
        setTimeout(() => setJustCompleted(false), 2000);
      }
      setPrevPct(newPct);
      return updated;
    });
  };

  const clearAll = () => {
    setChecked({});
    setPrevPct(0);
    localStorage.removeItem(`shopping-week-${weekNum}`);
  };

  const categories = ['Proteine', 'Carboidrati', 'Verdure', 'Latticini', 'Altro'] as const;
  const grouped: Record<string, ShoppingItem[]> = {};
  categories.forEach(cat => {
    grouped[cat] = items.filter(i => i.categoria === cat);
  });

  const boughtCount = Object.values(checked).filter(Boolean).length;
  const totalItems  = items.length;
  const pct         = totalItems > 0 ? Math.round((boughtCount / totalItems) * 100) : 0;
  const allDone     = pct === 100 && totalItems > 0;

  // Progress ring
  const ringRadius      = 36;
  const ringCirc        = 2 * Math.PI * ringRadius;
  const ringDashOffset  = ringCirc - (ringCirc * pct) / 100;

  return (
    <div className="space-y-4 page-enter">
      {/* Celebration overlay */}
      {justCompleted && (
        <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center">
          <div className="text-center celebrate-bounce">
            <div className="text-8xl mb-2">🎉</div>
            <div className="bg-white rounded-3xl shadow-2xl px-8 py-4 mx-4">
              <div className="text-2xl font-black text-green-600">Brava!</div>
              <div className="text-gray-500 text-sm font-medium">Lista completata!</div>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="bg-gradient-to-r from-green-400 to-emerald-500 rounded-3xl p-5 text-white shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-2xl font-black">Lista della Spesa</div>
            <div className="text-green-100 text-sm mt-0.5">Settimana {weekNum} di 4</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-4 py-2 text-right">
            <div className="text-3xl font-black">€{totalCost.toFixed(0)}</div>
            <div className="text-green-100 text-xs">Costo stimato</div>
          </div>
        </div>

        {/* Progress ring + bar */}
        <div className="flex items-center gap-4 bg-white/15 backdrop-blur-sm rounded-2xl p-3">
          {/* Ring */}
          <div className="relative shrink-0" style={{ width: 88, height: 88 }}>
            <svg width="88" height="88" viewBox="0 0 88 88" className="-rotate-90">
              <circle cx="44" cy="44" r={ringRadius} fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="8" />
              <circle
                cx="44"
                cy="44"
                r={ringRadius}
                fill="none"
                stroke="white"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={ringCirc}
                strokeDashoffset={ringDashOffset}
                style={{ transition: 'stroke-dashoffset 0.5s cubic-bezier(0.25,0.46,0.45,0.94)' }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-xl font-black text-white leading-none">{pct}%</span>
              {allDone && <span className="text-xs">✓</span>}
            </div>
          </div>

          {/* Text info */}
          <div className="flex-1">
            <div className="text-white font-black text-lg">
              {allDone ? 'Lista completata!' : `${boughtCount} di ${totalItems}`}
            </div>
            <div className="text-green-100 text-sm">
              {allDone ? 'Ottimo lavoro!' : 'articoli acquistati'}
            </div>
            <div className="mt-2 h-2.5 bg-white/25 rounded-full overflow-hidden">
              <div
                className="h-full bg-white rounded-full transition-all duration-500"
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Cost breakdown */}
      <div className="bg-white rounded-3xl p-4 border border-gray-100 shadow-sm">
        <h3 className="font-bold text-gray-700 mb-3 flex items-center gap-2">
          <span>💰</span> Stima costi settimanali
        </h3>
        <div className="grid grid-cols-2 gap-2.5">
          <div className="bg-gray-50 rounded-2xl p-3 text-center">
            <div className="text-lg font-black text-gray-800">€70–85</div>
            <div className="text-xs text-gray-500">Media settimana</div>
          </div>
          <div className="bg-orange-50 rounded-2xl p-3 text-center">
            <div className="text-lg font-black text-orange-600">€8–12</div>
            <div className="text-xs text-gray-500">Giorno normale</div>
          </div>
          <div className="bg-red-50 rounded-2xl p-3 text-center">
            <div className="text-lg font-black text-red-500">€15–20</div>
            <div className="text-xs text-gray-500">Sabato cheat</div>
          </div>
          <div className="bg-purple-50 rounded-2xl p-3 text-center">
            <div className="text-lg font-black text-purple-600">€12–15</div>
            <div className="text-xs text-gray-500">Domenica pizza</div>
          </div>
        </div>
      </div>

      {/* Reset button */}
      {boughtCount > 0 && (
        <button
          onClick={clearAll}
          className="w-full py-3 rounded-2xl border-2 border-gray-200 text-gray-500 font-semibold text-sm active:scale-[0.98] transition-transform bg-white shadow-sm"
        >
          Azzera lista ✕
        </button>
      )}

      {/* Categories */}
      {categories.map(cat => {
        const catItems = grouped[cat];
        if (!catItems || catItems.length === 0) return null;
        const catCost       = catItems.reduce((a, i) => a + i.costoStimato, 0);
        const catChecked    = catItems.filter(i => checked[i.name]).length;
        const catAllDone    = catChecked === catItems.length;

        return (
          <div
            key={cat}
            className={`rounded-3xl overflow-hidden shadow-sm border-l-4 ${categoryBorderColors[cat]} ${categoryBgColors[cat]} border border-gray-100`}
          >
            {/* Category header */}
            <div className="px-4 py-3.5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">{categoryIcons[cat]}</span>
                <div>
                  <h3 className={`font-black text-base ${categoryHeaderColors[cat]}`}>{cat}</h3>
                  <span className="text-xs text-gray-400">
                    {catChecked}/{catItems.length} articoli
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {catAllDone && (
                  <span className="check-pop text-base">✅</span>
                )}
                <span className="text-sm font-semibold text-gray-500">~€{catCost.toFixed(0)}</span>
              </div>
            </div>

            {/* Items */}
            <div className="divide-y divide-white/60 bg-white/40">
              {catItems.map((item, idx) => {
                const isChecked = checked[item.name] || false;
                return (
                  <button
                    key={idx}
                    onClick={() => toggle(item.name)}
                    className={`w-full flex items-center gap-3 px-4 py-3.5 text-left transition-all duration-300 active:scale-[0.98] ${
                      isChecked ? 'opacity-50' : 'opacity-100'
                    }`}
                  >
                    {/* Checkbox */}
                    <div
                      className={`w-7 h-7 rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-200 ${
                        isChecked
                          ? 'bg-green-500 border-green-500 shadow-sm'
                          : 'border-gray-300 bg-white'
                      }`}
                    >
                      {isChecked && (
                        <span className="check-pop text-white text-xs font-black">✓</span>
                      )}
                    </div>

                    {/* Name */}
                    <div className="flex-1 min-w-0">
                      <span
                        className={`text-sm font-semibold transition-all duration-300 ${
                          isChecked ? 'line-through text-gray-400' : 'text-gray-700'
                        }`}
                      >
                        {item.name}
                      </span>
                    </div>

                    {/* Quantity */}
                    <span
                      className={`text-xs font-medium shrink-0 transition-colors duration-300 ${
                        isChecked ? 'text-gray-300' : 'text-gray-400'
                      }`}
                    >
                      {item.quantita}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}

      <div className="h-4" />
    </div>
  );
}
