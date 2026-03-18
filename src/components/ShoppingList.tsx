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
  Proteine:    '#E8734A',
  Carboidrati: '#F4C430',
  Verdure:     '#6B9E6B',
  Latticini:   '#7BA7C4',
  Altro:       '#8B7355',
};

export default function ShoppingList({ items, weekNum, totalCost }: ShoppingListProps) {
  const [checked, setChecked]             = useState<Record<string, boolean>>({});
  const [justCompleted, setJustCompleted] = useState(false);
  const [prevPct, setPrevPct]             = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem(`shopping-week-${weekNum}`);
    if (saved) {
      try { setChecked(JSON.parse(saved)); } catch { setChecked({}); }
    }
  }, [weekNum]);

  const toggle = (itemName: string) => {
    setChecked(prev => {
      const updated        = { ...prev, [itemName]: !prev[itemName] };
      localStorage.setItem(`shopping-week-${weekNum}`, JSON.stringify(updated));

      const newBoughtCount = Object.values(updated).filter(Boolean).length;
      const newPct         = items.length > 0 ? Math.round((newBoughtCount / items.length) * 100) : 0;
      if (newPct === 100 && prevPct < 100) {
        setJustCompleted(true);
        setTimeout(() => setJustCompleted(false), 3000);
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

  return (
    <div className="space-y-4 page-enter">
      {/* Header card */}
      <div
        className="rounded-2xl p-4 shadow-sm"
        style={{ background: '#FFFFFF', border: '1px solid #F0E6D8' }}
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2
              className="text-xl font-black"
              style={{ color: '#2D2016' }}
            >
              Lista della Spesa
            </h2>
            <p
              className="text-sm mt-0.5"
              style={{ color: '#8B7355' }}
            >
              Settimana {weekNum} di 4
            </p>
          </div>
          <div
            className="px-4 py-2 rounded-xl text-right"
            style={{ background: '#FBE9E0' }}
          >
            <div
              className="text-2xl font-black"
              style={{ color: '#E8734A' }}
            >
              €{totalCost.toFixed(0)}
            </div>
            <div
              className="text-xs"
              style={{ color: '#8B7355' }}
            >
              Costo stimato
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span
              className="font-semibold"
              style={{ color: '#2D2016' }}
            >
              {allDone
                ? 'Brava Giusy! Tutto fatto! 🎉'
                : `${boughtCount} di ${totalItems} articoli`}
            </span>
            <span
              className="font-bold"
              style={{ color: '#E8734A' }}
            >
              {pct}%
            </span>
          </div>
          <div
            className="h-3 rounded-full overflow-hidden"
            style={{ background: '#F0E6D8' }}
          >
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${pct}%`,
                background: allDone ? '#6B9E6B' : '#E8734A',
              }}
            />
          </div>
        </div>
      </div>

      {/* Cost breakdown */}
      <div
        className="rounded-2xl p-4 shadow-sm"
        style={{ background: '#FFFFFF', border: '1px solid #F0E6D8' }}
      >
        <h3
          className="font-bold mb-3 flex items-center gap-2"
          style={{ color: '#2D2016' }}
        >
          <span>💰</span> Stima costi settimanali
        </h3>
        <div className="grid grid-cols-2 gap-2">
          <div
            className="rounded-xl p-3 text-center"
            style={{ background: '#FFF8F0' }}
          >
            <div className="text-lg font-black" style={{ color: '#2D2016' }}>€70–85</div>
            <div className="text-xs" style={{ color: '#8B7355' }}>Media settimana</div>
          </div>
          <div
            className="rounded-xl p-3 text-center"
            style={{ background: '#FBE9E0' }}
          >
            <div className="text-lg font-black" style={{ color: '#E8734A' }}>€8–12</div>
            <div className="text-xs" style={{ color: '#8B7355' }}>Giorno normale</div>
          </div>
          <div
            className="rounded-xl p-3 text-center"
            style={{ background: '#FFF8F0' }}
          >
            <div className="text-lg font-black" style={{ color: '#C0392B' }}>€15–20</div>
            <div className="text-xs" style={{ color: '#8B7355' }}>Sabato libero</div>
          </div>
          <div
            className="rounded-xl p-3 text-center"
            style={{ background: '#FBE9E0' }}
          >
            <div className="text-lg font-black" style={{ color: '#E8734A' }}>€12–15</div>
            <div className="text-xs" style={{ color: '#8B7355' }}>Domenica pizza</div>
          </div>
        </div>
      </div>

      {/* Reset button */}
      {boughtCount > 0 && (
        <button
          onClick={clearAll}
          className="w-full py-3 rounded-xl font-semibold text-sm active:scale-[0.98] transition-transform"
          style={{ background: '#FFFFFF', border: '1px solid #F0E6D8', color: '#8B7355' }}
        >
          Azzera lista
        </button>
      )}

      {/* Categories */}
      {categories.map(cat => {
        const catItems = grouped[cat];
        if (!catItems || catItems.length === 0) return null;
        const catCost    = catItems.reduce((a, i) => a + i.costoStimato, 0);
        const catChecked = catItems.filter(i => checked[i.name]).length;
        const catAllDone = catChecked === catItems.length;
        const borderCol  = categoryBorderColors[cat];

        return (
          <div
            key={cat}
            className="rounded-2xl overflow-hidden shadow-sm"
            style={{
              background: '#FFFFFF',
              border: '1px solid #F0E6D8',
              borderLeft: `4px solid ${borderCol}`,
            }}
          >
            {/* Category header */}
            <div
              className="px-4 py-3.5 flex items-center justify-between"
              style={{ borderBottom: '1px solid #F0E6D8' }}
            >
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">{categoryIcons[cat]}</span>
                <div>
                  <h3
                    className="font-black text-base"
                    style={{ color: '#2D2016' }}
                  >
                    {cat}
                  </h3>
                  <span
                    className="text-xs"
                    style={{ color: '#8B7355' }}
                  >
                    {catChecked}/{catItems.length} articoli
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {catAllDone && (
                  <span className="check-pop text-base">✅</span>
                )}
                <span
                  className="text-sm font-semibold"
                  style={{ color: '#8B7355' }}
                >
                  ~€{catCost.toFixed(0)}
                </span>
              </div>
            </div>

            {/* Items */}
            <div>
              {catItems.map((item, idx) => {
                const isChecked = checked[item.name] || false;
                return (
                  <button
                    key={idx}
                    onClick={() => toggle(item.name)}
                    className="w-full flex items-center gap-3 px-4 py-3.5 text-left transition-all duration-300 active:scale-[0.98]"
                    style={{
                      borderBottom: idx < catItems.length - 1 ? '1px solid #F0E6D8' : 'none',
                      opacity: isChecked ? 0.55 : 1,
                    }}
                  >
                    {/* Checkbox */}
                    <div
                      className="w-7 h-7 rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-200"
                      style={{
                        background: isChecked ? '#6B9E6B' : '#FFFFFF',
                        borderColor: isChecked ? '#6B9E6B' : '#F0E6D8',
                      }}
                    >
                      {isChecked && (
                        <span className="check-pop text-white text-xs font-black">✓</span>
                      )}
                    </div>

                    {/* Name */}
                    <div className="flex-1 min-w-0">
                      <span
                        className="text-sm font-semibold transition-all duration-300"
                        style={{
                          textDecoration: isChecked ? 'line-through' : 'none',
                          color: isChecked ? '#8B7355' : '#2D2016',
                        }}
                      >
                        {item.name}
                      </span>
                    </div>

                    {/* Quantity */}
                    <span
                      className="text-xs font-medium shrink-0 transition-colors duration-300"
                      style={{ color: isChecked ? '#F0E6D8' : '#8B7355' }}
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
