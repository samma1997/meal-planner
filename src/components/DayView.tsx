'use client';

import { useState, useEffect } from 'react';
import { DayPlan, Meal } from '@/data/types';
import { getDayMacros, formatDateItalian, formatDateKey, getAlternativeMeal, saveSwap, getSwap } from '@/data/utils';
import { allMeals } from '@/data/meals';
import MealCard from './MealCard';
import MacroSummary from './MacroSummary';
import Link from 'next/link';

interface DayViewProps {
  plan: DayPlan;
  date: Date;
  showNavigation?: boolean;
}

export default function DayView({ plan, date, showNavigation = true }: DayViewProps) {
  const dateKey = formatDateKey(date);

  // Local meal state — starts from the base plan, then hydrates from localStorage swaps
  const [colazione, setColazione] = useState<Meal>(plan.colazione);
  const [pranzo,    setPranzo]    = useState<Meal>(plan.pranzo);
  const [spuntino,  setSpuntino]  = useState<Meal>(plan.spuntino);
  const [cena,      setCena]      = useState<Meal>(plan.cena);

  // Hydrate saved swaps from localStorage on mount / when date changes
  useEffect(() => {
    const resolve = (baseMeal: Meal): Meal => {
      const savedId = getSwap(dateKey, baseMeal.tipo);
      if (!savedId) return baseMeal;
      return allMeals.find(m => m.id === savedId) ?? baseMeal;
    };
    setColazione(resolve(plan.colazione));
    setPranzo(resolve(plan.pranzo));
    setSpuntino(resolve(plan.spuntino));
    setCena(resolve(plan.cena));
  }, [dateKey, plan.colazione, plan.pranzo, plan.spuntino, plan.cena]);

  // Build the effective plan for macros / cost display
  const effectivePlan: DayPlan = { ...plan, colazione, pranzo, spuntino, cena };
  const macros  = getDayMacros(effectivePlan);
  const dateStr = formatDateItalian(date);
  const isToday = formatDateKey(new Date()) === dateKey;

  const prevDate = new Date(date);
  prevDate.setDate(prevDate.getDate() - 1);
  const nextDate = new Date(date);
  nextDate.setDate(nextDate.getDate() + 1);

  const costColor =
    plan.costoStimato > 15
      ? '#C0392B'
      : plan.costoStimato > 12
      ? '#E8734A'
      : '#6B9E6B';

  // Shuffle handlers — each closes over its own current meal ref via the setter
  const handleSwapColazione = () => {
    const alt = getAlternativeMeal(colazione);
    saveSwap(dateKey, 'colazione', alt.id);
    setColazione(alt);
  };
  const handleSwapPranzo = () => {
    const alt = getAlternativeMeal(pranzo);
    saveSwap(dateKey, 'pranzo', alt.id);
    setPranzo(alt);
  };
  const handleSwapSpuntino = () => {
    const alt = getAlternativeMeal(spuntino);
    saveSwap(dateKey, 'spuntino', alt.id);
    setSpuntino(alt);
  };
  const handleSwapCena = () => {
    const alt = getAlternativeMeal(cena);
    saveSwap(dateKey, 'cena', alt.id);
    setCena(alt);
  };

  // Only allow shuffle on non-cheat / non-pizza days
  const canShuffle = !plan.isCheatDay && !plan.isPizzaDay;

  return (
    <div className="space-y-4 page-enter">
      {/* Day header with navigation */}
      {showNavigation && (
        <div
          className="rounded-2xl overflow-hidden shadow-sm"
          style={{ background: '#FFFFFF', border: '1px solid #F0E6D8' }}
        >
          <div className="px-4 py-4 flex items-center justify-between gap-3">
            {/* Prev day */}
            <Link
              href={`/giorno/${formatDateKey(prevDate)}`}
              className="w-11 h-11 rounded-xl flex items-center justify-center font-bold text-xl active:scale-90 transition-transform shrink-0"
              style={{ background: '#FFF8F0', color: '#8B7355', border: '1px solid #F0E6D8' }}
            >
              ‹
            </Link>

            {/* Center: date info */}
            <div className="text-center flex-1">
              <div
                className="font-black text-lg capitalize leading-tight"
                style={{ color: '#2D2016' }}
              >
                {dateStr}
              </div>
              <div
                className="text-xs mt-0.5"
                style={{ color: '#8B7355' }}
              >
                Settimana {plan.weekNumber} di 4
              </div>

              {/* Status pills */}
              <div className="flex items-center justify-center gap-2 mt-2 flex-wrap">
                {isToday && (
                  <span
                    className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full"
                    style={{ background: '#E8734A', color: '#FFFFFF' }}
                  >
                    Oggi
                  </span>
                )}
                {plan.isCheatDay && (
                  <span
                    className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ background: '#FBE9E0', color: '#E8734A' }}
                  >
                    Giorno libero! 🎉
                  </span>
                )}
                {plan.isPizzaDay && (
                  <span
                    className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ background: '#FBE9E0', color: '#E8734A' }}
                  >
                    Stasera pizza! 🍕
                  </span>
                )}
              </div>
            </div>

            {/* Next day */}
            <Link
              href={`/giorno/${formatDateKey(nextDate)}`}
              className="w-11 h-11 rounded-xl flex items-center justify-center font-bold text-xl active:scale-90 transition-transform shrink-0"
              style={{ background: '#FFF8F0', color: '#8B7355', border: '1px solid #F0E6D8' }}
            >
              ›
            </Link>
          </div>
        </div>
      )}

      {/* Cost estimate */}
      <div
        className="rounded-2xl px-4 py-3 shadow-sm flex items-center gap-3"
        style={{ background: '#FFFFFF', border: '1px solid #F0E6D8' }}
      >
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
          style={{ background: '#F0F7F0' }}
        >
          💰
        </div>
        <div className="flex-1">
          <div
            className="text-sm font-semibold"
            style={{ color: '#2D2016' }}
          >
            Costo stimato del giorno
          </div>
          <div
            className="text-xs"
            style={{ color: '#8B7355' }}
          >
            Spesa approssimativa
          </div>
        </div>
        <div
          className="text-2xl font-black"
          style={{ color: costColor }}
        >
          €{plan.costoStimato.toFixed(2)}
        </div>
      </div>

      {/* Macro summary — collapsible, for Luca */}
      <MacroSummary macros={macros} />

      {/* Meal cards */}
      <div className="space-y-3">
        <div className="card-enter">
          <MealCard
            meal={colazione}
            onSwap={canShuffle ? handleSwapColazione : undefined}
            dateKey={dateKey}
          />
        </div>
        <div className="card-enter">
          <MealCard
            meal={pranzo}
            onSwap={canShuffle ? handleSwapPranzo : undefined}
            dateKey={dateKey}
          />
        </div>
        <div className="card-enter">
          <MealCard
            meal={spuntino}
            onSwap={canShuffle ? handleSwapSpuntino : undefined}
            dateKey={dateKey}
          />
        </div>
        <div className="card-enter">
          <MealCard
            meal={cena}
            onSwap={canShuffle ? handleSwapCena : undefined}
            dateKey={dateKey}
          />
        </div>
      </div>
    </div>
  );
}
