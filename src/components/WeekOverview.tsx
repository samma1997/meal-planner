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
      {/* Week summary card */}
      <div
        className="rounded-2xl p-4 shadow-sm"
        style={{ background: '#FFFFFF', border: '1px solid #F0E6D8' }}
      >
        <div className="flex items-center justify-between">
          <div>
            <div
              className="text-xl font-black"
              style={{ color: '#2D2016' }}
            >
              Settimana {weekNum}
            </div>
            <div
              className="text-sm mt-0.5"
              style={{ color: '#8B7355' }}
            >
              di 4 settimane
            </div>
          </div>
          <div
            className="text-right px-4 py-2 rounded-xl"
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
      </div>

      {/* Day cards */}
      <div className="space-y-2">
        {days.map(({ plan, date }, index) => {
          const dateKey = formatDateKey(date);
          const isToday = dateKey === today;
          const dayName = GIORNI_SETTIMANA_FULL[plan.weekDay];

          return (
            <Link
              key={dateKey}
              href={`/giorno/${dateKey}`}
              className="card-enter block rounded-2xl p-4 transition-all duration-200 active:scale-[0.98] shadow-sm"
              style={{
                background: isToday ? '#FBE9E0' : '#FFFFFF',
                border: isToday ? '2px solid #E8734A' : '1px solid #F0E6D8',
                animationDelay: `${index * 0.07}s`,
              }}
            >
              <div className="flex items-center gap-3">
                {/* Day name block */}
                <div className="shrink-0 w-14 text-center">
                  <div
                    className="text-sm font-black uppercase tracking-wide"
                    style={{ color: isToday ? '#E8734A' : '#2D2016' }}
                  >
                    {dayName.substring(0, 3)}
                  </div>
                  <div
                    className="text-xs font-medium mt-0.5"
                    style={{ color: '#8B7355' }}
                  >
                    {date.getDate()}/{date.getMonth() + 1}
                  </div>
                  {isToday && (
                    <span
                      className="inline-block mt-1 text-xs px-2 py-0.5 rounded-full font-bold"
                      style={{ background: '#E8734A', color: '#FFFFFF' }}
                    >
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
                      className="flex flex-col items-center rounded-xl py-2 px-1 shadow-sm"
                      style={{ background: '#FFF8F0', border: '1px solid #F0E6D8' }}
                      title={meal.nome}
                    >
                      <span className="text-2xl leading-none">{meal.emoji}</span>
                      <span
                        className="text-[9px] font-medium mt-1 truncate w-full text-center"
                        style={{ color: '#8B7355' }}
                      >
                        {meal.tipo === 'colazione' ? 'Col' :
                         meal.tipo === 'pranzo'    ? 'Pra' :
                         meal.tipo === 'spuntino'  ? 'Spu' : 'Cen'}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Right: cost + arrow */}
                <div className="shrink-0 text-right">
                  <div
                    className="text-base font-black"
                    style={{ color: isToday ? '#E8734A' : '#6B9E6B' }}
                  >
                    €{plan.costoStimato.toFixed(0)}
                  </div>
                  <div
                    className="text-xs font-medium"
                    style={{ color: '#8B7355' }}
                  >
                    oggi
                  </div>
                  <span style={{ color: '#F0E6D8', fontSize: '16px' }}>›</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
