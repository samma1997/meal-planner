'use client';

import { useState, useEffect } from 'react';
import { getEffectiveDayPlan, formatDateKey, parseDateKey } from '@/data/utils';
import DayView from '@/components/DayView';

function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return 'Buongiorno';
  if (hour < 18) return 'Buon pomeriggio';
  return 'Buonasera';
}

function formatDateNice(date: Date): string {
  return date.toLocaleDateString('it-IT', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });
}

function SkeletonLoader() {
  return (
    <div className="space-y-5 page-enter">
      <div className="space-y-2">
        <div className="skeleton h-9 w-52" />
        <div className="skeleton h-5 w-40" />
      </div>
      <div className="skeleton h-16 w-full rounded-2xl" />
      <div className="skeleton h-28 w-full rounded-2xl" />
      <div className="skeleton h-16 w-full rounded-2xl" />
      {[1, 2, 3, 4].map(i => (
        <div key={i} className="skeleton h-28 w-full rounded-2xl" />
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

  const plan    = getEffectiveDayPlan(selectedDate);
  const today   = new Date();
  const isToday = formatDateKey(selectedDate) === formatDateKey(today);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) setSelectedDate(parseDateKey(e.target.value));
  };

  const goToToday = () => setSelectedDate(new Date());

  return (
    <div className="space-y-5 page-enter">
      {/* Warm greeting header */}
      <div className="pt-1">
        <h1 className="text-3xl font-black leading-tight" style={{ color: '#2D2016' }}>
          {getGreeting()}, Giusy!
        </h1>
        <p className="text-base font-medium mt-1 capitalize" style={{ color: '#8B7355' }}>
          {formatDateNice(selectedDate)}
        </p>
        {isToday && (
          <p className="text-sm font-medium mt-0.5" style={{ color: '#E8734A' }}>
            Ecco cosa preparare oggi
          </p>
        )}
      </div>

      {/* Date selector — warm card */}
      <div
        className="rounded-2xl border p-3.5 flex items-center gap-3 shadow-sm"
        style={{ background: '#FFFFFF', borderColor: '#F0E6D8' }}
      >
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
          style={{ background: '#FBE9E0' }}
        >
          📅
        </div>
        <div className="flex-1">
          <label className="text-xs font-semibold uppercase tracking-wide block mb-0.5" style={{ color: '#8B7355' }}>
            Scegli un giorno
          </label>
          <input
            type="date"
            value={formatDateKey(selectedDate)}
            onChange={handleDateChange}
            className="w-full text-sm font-bold bg-transparent outline-none cursor-pointer"
            style={{ color: '#2D2016' }}
          />
        </div>
        {!isToday && (
          <button
            onClick={goToToday}
            className="text-xs font-bold px-3 py-1.5 rounded-xl active:scale-95 transition-transform"
            style={{ background: '#E8734A', color: '#FFFFFF' }}
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
