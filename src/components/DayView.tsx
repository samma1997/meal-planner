'use client';

import { DayPlan } from '@/data/types';
import { getDayMacros, formatDateItalian, formatDateKey } from '@/data/utils';
import MealCard from './MealCard';
import MacroSummary from './MacroSummary';
import Link from 'next/link';

interface DayViewProps {
  plan: DayPlan;
  date: Date;
  showNavigation?: boolean;
}

export default function DayView({ plan, date, showNavigation = true }: DayViewProps) {
  const macros  = getDayMacros(plan);
  const dateStr = formatDateItalian(date);
  const isToday = formatDateKey(new Date()) === formatDateKey(date);

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
        <div className="card-enter"><MealCard meal={plan.colazione} /></div>
        <div className="card-enter"><MealCard meal={plan.pranzo} /></div>
        <div className="card-enter"><MealCard meal={plan.spuntino} /></div>
        <div className="card-enter"><MealCard meal={plan.cena} /></div>
      </div>
    </div>
  );
}
