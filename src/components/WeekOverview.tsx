'use client';

import Link from 'next/link';
import { DayPlan } from '@/data/types';
import { getDayMacros, formatDateKey, GIORNI_SETTIMANA_FULL } from '@/data/utils';

interface WeekOverviewProps {
  days: { plan: DayPlan; date: Date }[];
  weekNum: number;
  totalCost: number;
}

export default function WeekOverview({ days, weekNum, totalCost }: WeekOverviewProps) {
  const today = formatDateKey(new Date());

  return (
    <div className="space-y-3 page-enter">
      {/* Week header */}
      <div className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 rounded-3xl p-5 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-black">Settimana {weekNum}</div>
            <div className="text-orange-100 text-sm mt-0.5">di 4 settimane</div>
          </div>
          <div className="text-right bg-white/20 backdrop-blur-sm rounded-2xl px-4 py-2">
            <div className="text-3xl font-black">€{totalCost.toFixed(0)}</div>
            <div className="text-orange-100 text-xs">Costo stimato</div>
          </div>
        </div>
      </div>

      {/* Day cards */}
      <div className="space-y-2">
        {days.map(({ plan, date }, index) => {
          const macros  = getDayMacros(plan);
          const dateKey = formatDateKey(date);
          const isToday = dateKey === today;
          const dayName = GIORNI_SETTIMANA_FULL[plan.weekDay];

          return (
            <Link
              key={dateKey}
              href={`/giorno/${dateKey}`}
              className={`card-enter block rounded-3xl border-2 p-4 transition-all duration-200 active:scale-[0.98] shadow-sm ${
                isToday
                  ? 'border-orange-400 bg-gradient-to-r from-orange-50 to-amber-50 shadow-md shadow-orange-100'
                  : plan.isCheatDay
                  ? 'border-red-200 bg-gradient-to-r from-red-50 to-pink-50'
                  : plan.isPizzaDay
                  ? 'border-purple-200 bg-gradient-to-r from-purple-50 to-violet-50'
                  : 'border-gray-100 bg-white hover:border-orange-200'
              }`}
              style={{ animationDelay: `${index * 0.07}s` }}
            >
              <div className="flex items-center gap-3">
                {/* Day label block */}
                <div className="shrink-0 w-14 text-center">
                  <div
                    className={`text-sm font-black uppercase tracking-wide ${
                      isToday ? 'text-orange-600' : 'text-gray-600'
                    }`}
                  >
                    {dayName.substring(0, 3)}
                  </div>
                  <div className="text-xs text-gray-400 font-medium">
                    {date.getDate()}/{date.getMonth() + 1}
                  </div>
                  {isToday && (
                    <span className="today-pulse inline-block mt-1 text-xs bg-orange-500 text-white px-2 py-0.5 rounded-full font-bold shadow-sm">
                      Oggi
                    </span>
                  )}
                  {!isToday && plan.isCheatDay && <span className="text-base">🎉</span>}
                  {!isToday && plan.isPizzaDay && <span className="text-base">🍕</span>}
                </div>

                {/* 4 meal emojis */}
                <div className="flex-1 grid grid-cols-4 gap-1.5">
                  {[plan.colazione, plan.pranzo, plan.spuntino, plan.cena].map((meal, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center bg-white/70 rounded-2xl py-2 px-1 shadow-sm"
                      title={meal.nome}
                    >
                      <span className="text-2xl leading-none">{meal.emoji}</span>
                      <span className="text-[9px] text-gray-400 font-medium mt-1 truncate w-full text-center">
                        {meal.tipo === 'colazione' ? 'Col' :
                         meal.tipo === 'pranzo'    ? 'Pra' :
                         meal.tipo === 'spuntino'  ? 'Spu' : 'Cen'}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Right stats */}
                <div className="shrink-0 text-right">
                  <div className={`text-lg font-black ${isToday ? 'text-orange-500' : 'text-gray-700'}`}>
                    {macros.kcal}
                  </div>
                  <div className="text-xs text-gray-400 font-medium">kcal</div>
                  <div className="text-sm font-bold text-green-600 mt-1">
                    €{plan.costoStimato.toFixed(0)}
                  </div>
                  <span className="text-gray-300 text-xs">›</span>
                </div>
              </div>

              {/* Mini macro bar */}
              <div className="flex gap-3 mt-3 pt-2.5 border-t border-gray-100/80">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-400 inline-block shrink-0"></span>
                  <span className="text-xs text-gray-500 font-medium">{macros.proteine}g P</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block shrink-0"></span>
                  <span className="text-xs text-gray-500 font-medium">{macros.carboidrati}g C</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-400 inline-block shrink-0"></span>
                  <span className="text-xs text-gray-500 font-medium">{macros.grassi}g G</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
