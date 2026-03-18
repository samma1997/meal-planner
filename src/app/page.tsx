'use client';

import { useState, useEffect } from 'react';
import { getDayPlan, formatDateKey, parseDateKey } from '@/data/utils';
import DayView from '@/components/DayView';

function SkeletonLoader() {
  return (
    <div className="space-y-4 page-enter">
      {/* Header skeleton */}
      <div className="space-y-2">
        <div className="skeleton h-8 w-48" />
        <div className="skeleton h-4 w-64" />
      </div>
      {/* Date picker skeleton */}
      <div className="skeleton h-16 w-full rounded-2xl" />
      {/* Hero header skeleton */}
      <div className="skeleton h-28 w-full rounded-3xl" />
      {/* Cost skeleton */}
      <div className="skeleton h-16 w-full rounded-2xl" />
      {/* Macro skeleton */}
      <div className="skeleton h-44 w-full rounded-3xl" />
      {/* Cards skeleton */}
      {[1, 2, 3, 4].map(i => (
        <div key={i} className="skeleton h-32 w-full rounded-3xl" />
      ))}
    </div>
  );
}

export default function Home() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [mounted, setMounted]           = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <SkeletonLoader />;
  }

  const plan    = getDayPlan(selectedDate);
  const today   = new Date();
  const isToday = formatDateKey(selectedDate) === formatDateKey(today);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) setSelectedDate(parseDateKey(e.target.value));
  };

  const goToToday = () => setSelectedDate(new Date());

  return (
    <div className="space-y-4 page-enter">
      {/* App Header */}
      <div className="flex items-center justify-between pt-1">
        <div>
          <h1 className="text-2xl font-black text-gray-900 leading-tight">
            Piano Pasti <span className="text-orange-500">Luca</span> 💪
          </h1>
          <p className="text-sm text-gray-400 font-medium mt-0.5">2400 kcal · 150g P · 280g C · 65g G</p>
        </div>
        {!isToday && (
          <button
            onClick={goToToday}
            className="bg-orange-500 text-white text-sm font-bold px-4 py-2.5 rounded-2xl shadow-md active:scale-95 transition-transform"
          >
            Oggi
          </button>
        )}
      </div>

      {/* Date Picker */}
      <div className="bg-white rounded-2xl border border-gray-100 p-3.5 flex items-center gap-3 shadow-sm">
        <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-xl shrink-0">
          📅
        </div>
        <div className="flex-1">
          <label className="text-xs text-gray-400 block mb-0.5 font-semibold uppercase tracking-wide">
            Vai a un giorno
          </label>
          <input
            type="date"
            value={formatDateKey(selectedDate)}
            onChange={handleDateChange}
            className="w-full text-sm font-bold text-gray-800 bg-transparent outline-none cursor-pointer"
          />
        </div>
        {!isToday && (
          <button
            onClick={goToToday}
            className="text-xs text-orange-500 font-bold border-2 border-orange-300 px-3 py-1.5 rounded-xl active:scale-95 transition-transform"
          >
            Oggi
          </button>
        )}
      </div>

      {/* Day View */}
      <DayView plan={plan} date={selectedDate} showNavigation={true} />
    </div>
  );
}
