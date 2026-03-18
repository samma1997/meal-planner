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
  const macros   = getDayMacros(plan);
  const dateStr  = formatDateItalian(date);
  const isToday  = formatDateKey(new Date()) === formatDateKey(date);

  const prevDate = new Date(date);
  prevDate.setDate(prevDate.getDate() - 1);
  const nextDate = new Date(date);
  nextDate.setDate(nextDate.getDate() + 1);

  const costColor =
    plan.costoStimato > 15
      ? 'text-red-500'
      : plan.costoStimato > 12
      ? 'text-orange-500'
      : 'text-green-600';

  // Pick gradient based on day type
  const headerGradient = plan.isCheatDay
    ? 'from-red-400 via-pink-400 to-rose-500'
    : plan.isPizzaDay
    ? 'from-purple-500 via-violet-500 to-indigo-500'
    : isToday
    ? 'from-orange-400 via-amber-400 to-orange-500'
    : 'from-gray-600 via-gray-700 to-gray-800';

  return (
    <div className="space-y-4 page-enter">
      {/* Beautiful gradient day header */}
      {showNavigation && (
        <div className={`bg-gradient-to-r ${headerGradient} rounded-3xl shadow-lg overflow-hidden`}>
          <div className="px-4 py-5">
            <div className="flex items-center justify-between">
              {/* Prev day arrow */}
              <Link
                href={`/giorno/${formatDateKey(prevDate)}`}
                className="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-bold text-xl active:scale-90 transition-transform"
              >
                ‹
              </Link>

              {/* Center: day info */}
              <div className="text-center flex-1 px-3">
                <div className="text-white font-black text-xl capitalize leading-tight">{dateStr}</div>
                <div className="text-white/70 text-xs mt-0.5">Settimana {plan.weekNumber} di 4</div>

                {/* Badges row */}
                <div className="flex items-center justify-center gap-2 mt-2 flex-wrap">
                  {isToday && (
                    <span className="today-pulse inline-flex items-center gap-1 bg-white text-orange-600 font-black text-xs px-3 py-1 rounded-full shadow-md">
                      ✨ Oggi
                    </span>
                  )}
                  {plan.isCheatDay && (
                    <span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm text-white font-bold text-xs px-3 py-1 rounded-full border border-white/30">
                      🎉 Giorno libero!
                    </span>
                  )}
                  {plan.isPizzaDay && (
                    <span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm text-white font-bold text-xs px-3 py-1 rounded-full border border-white/30">
                      🍕 Pizza domenica!
                    </span>
                  )}
                </div>
              </div>

              {/* Next day arrow */}
              <Link
                href={`/giorno/${formatDateKey(nextDate)}`}
                className="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-bold text-xl active:scale-90 transition-transform"
              >
                ›
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Cost estimate — compact pill style */}
      <div className="bg-white rounded-2xl px-4 py-3 shadow-sm border border-gray-100 flex items-center gap-3">
        <div className="w-10 h-10 rounded-2xl bg-green-50 flex items-center justify-center text-xl shrink-0">
          💰
        </div>
        <div className="flex-1">
          <div className="text-sm font-semibold text-gray-700">Costo stimato del giorno</div>
          <div className="text-xs text-gray-400">Spesa approssimativa</div>
        </div>
        <div className={`text-2xl font-black ${costColor}`}>€{plan.costoStimato.toFixed(2)}</div>
      </div>

      {/* Macro summary */}
      <MacroSummary macros={macros} />

      {/* Meal cards with stagger */}
      <div className="space-y-3">
        <div className="card-enter"><MealCard meal={plan.colazione} /></div>
        <div className="card-enter"><MealCard meal={plan.pranzo} /></div>
        <div className="card-enter"><MealCard meal={plan.spuntino} /></div>
        <div className="card-enter"><MealCard meal={plan.cena} /></div>
      </div>
    </div>
  );
}
