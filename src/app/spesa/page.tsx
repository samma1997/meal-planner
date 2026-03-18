'use client';

import { useState, useEffect } from 'react';
import { getWeekPlan, getMonday, getDayPlan, generateShoppingList } from '@/data/utils';
import ShoppingList from '@/components/ShoppingList';

function SkeletonLoader() {
  return (
    <div className="space-y-4 page-enter">
      <div className="skeleton h-8 w-44" />
      <div className="skeleton h-16 w-full rounded-2xl" />
      <div className="skeleton h-36 w-full rounded-2xl" />
      <div className="skeleton h-40 w-full rounded-2xl" />
      {[1, 2, 3, 4, 5].map(i => (
        <div key={i} className="skeleton h-32 w-full rounded-2xl" />
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
        <h1 className="text-2xl font-black" style={{ color: '#2D2016' }}>
          Lista della Spesa 🛒
        </h1>
        {weekOffset !== 0 && (
          <button
            onClick={() => setWeekOffset(0)}
            className="text-xs font-bold px-4 py-2.5 rounded-xl shadow-sm active:scale-95 transition-transform"
            style={{ background: '#E8734A', color: '#FFFFFF' }}
          >
            Questa settimana
          </button>
        )}
      </div>

      {/* Week Navigation */}
      <div
        className="rounded-2xl border p-3 flex items-center justify-between shadow-sm"
        style={{ background: '#FFFFFF', borderColor: '#F0E6D8' }}
      >
        <button
          onClick={() => setWeekOffset(w => w - 1)}
          className="w-11 h-11 rounded-xl active:scale-95 transition-all font-bold text-xl flex items-center justify-center"
          style={{ background: '#FFF8F0', color: '#8B7355', border: '1px solid #F0E6D8' }}
        >
          ‹
        </button>
        <div className="text-center">
          <div
            className="text-sm font-bold"
            style={{ color: '#2D2016' }}
          >
            {weekRangeLabel}
          </div>
          <div
            className="text-xs font-medium"
            style={{ color: '#8B7355' }}
          >
            Settimana {weekPlan.settimana} di 4
          </div>
          {weekOffset === 0 && (
            <span
              className="text-xs font-bold px-2 py-0.5 rounded-full"
              style={{ background: '#FBE9E0', color: '#6B9E6B' }}
            >
              Settimana corrente
            </span>
          )}
        </div>
        <button
          onClick={() => setWeekOffset(w => w + 1)}
          className="w-11 h-11 rounded-xl active:scale-95 transition-all font-bold text-xl flex items-center justify-center"
          style={{ background: '#FFF8F0', color: '#8B7355', border: '1px solid #F0E6D8' }}
        >
          ›
        </button>
      </div>

      <ShoppingList items={shoppingItems} weekNum={weekPlan.settimana} totalCost={totalCost} />
    </div>
  );
}
