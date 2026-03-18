'use client';

import { useState, useEffect } from 'react';
import { getWeekPlan, getMonday, getDayPlan, generateShoppingList } from '@/data/utils';
import ShoppingList from '@/components/ShoppingList';

function SkeletonLoader() {
  return (
    <div className="space-y-4 page-enter">
      <div className="skeleton h-8 w-44" />
      <div className="skeleton h-16 w-full rounded-2xl" />
      <div className="skeleton h-36 w-full rounded-3xl" />
      <div className="skeleton h-40 w-full rounded-3xl" />
      {[1, 2, 3, 4, 5].map(i => (
        <div key={i} className="skeleton h-32 w-full rounded-3xl" />
      ))}
    </div>
  );
}

export default function SpesaPage() {
  const [mounted, setMounted]       = useState(false);
  const [weekOffset, setWeekOffset] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <SkeletonLoader />;

  const baseDate = new Date();
  baseDate.setDate(baseDate.getDate() + weekOffset * 7);
  const monday   = getMonday(baseDate);
  const weekPlan = getWeekPlan(monday);

  const days = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(monday);
    d.setDate(d.getDate() + i);
    days.push(getDayPlan(d));
  }

  const shoppingItems = generateShoppingList(days);
  const totalCost     = days.reduce((sum, day) => sum + day.costoStimato, 0);

  const sundayDate = new Date(monday);
  sundayDate.setDate(sundayDate.getDate() + 6);
  const weekRangeLabel = `${monday.getDate()}/${monday.getMonth() + 1} – ${sundayDate.getDate()}/${sundayDate.getMonth() + 1}`;

  return (
    <div className="space-y-4 page-enter">
      {/* Header */}
      <div className="flex items-center justify-between pt-1">
        <h1 className="text-2xl font-black text-gray-900">Lista Spesa 🛒</h1>
        {weekOffset !== 0 && (
          <button
            onClick={() => setWeekOffset(0)}
            className="bg-orange-500 text-white text-xs font-bold px-4 py-2.5 rounded-2xl shadow-md active:scale-95 transition-transform"
          >
            Questa settimana
          </button>
        )}
      </div>

      {/* Week Navigation */}
      <div className="bg-white rounded-2xl border border-gray-100 p-3 flex items-center justify-between shadow-sm">
        <button
          onClick={() => setWeekOffset(w => w - 1)}
          className="w-11 h-11 rounded-xl bg-gray-100 active:bg-gray-200 transition-colors text-gray-600 font-bold text-xl flex items-center justify-center active:scale-95"
        >
          ‹
        </button>
        <div className="text-center">
          <div className="text-sm font-bold text-gray-800">{weekRangeLabel}</div>
          <div className="text-xs text-gray-400 font-medium">Settimana {weekPlan.settimana} di 4</div>
          {weekOffset === 0 && (
            <span className="text-xs bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded-full">
              Settimana corrente
            </span>
          )}
        </div>
        <button
          onClick={() => setWeekOffset(w => w + 1)}
          className="w-11 h-11 rounded-xl bg-gray-100 active:bg-gray-200 transition-colors text-gray-600 font-bold text-xl flex items-center justify-center active:scale-95"
        >
          ›
        </button>
      </div>

      <ShoppingList items={shoppingItems} weekNum={weekPlan.settimana} totalCost={totalCost} />
    </div>
  );
}
