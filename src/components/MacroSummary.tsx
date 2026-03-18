'use client';

import { Macros } from '@/data/types';
import { TARGET_MACROS } from '@/data/utils';

interface MacroSummaryProps {
  macros: Macros;
}

// SVG circular ring indicator
function MacroRing({
  value,
  target,
  label,
  unit,
  color,
  trackColor,
  textColor,
}: {
  value: number;
  target: number;
  label: string;
  unit: string;
  color: string;
  trackColor: string;
  textColor: string;
}) {
  const pct = Math.min(100, Math.round((value / target) * 100));
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (circumference * pct) / 100;

  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="relative w-18 h-18" style={{ width: 72, height: 72 }}>
        <svg width="72" height="72" viewBox="0 0 72 72" className="-rotate-90">
          {/* Track */}
          <circle
            cx="36"
            cy="36"
            r={radius}
            fill="none"
            stroke={trackColor}
            strokeWidth="7"
          />
          {/* Progress */}
          <circle
            cx="36"
            cy="36"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="7"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            style={{ transition: 'stroke-dashoffset 0.8s cubic-bezier(0.25,0.46,0.45,0.94)' }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`text-base font-black leading-none ${textColor}`}>{value}</span>
          <span className="text-xs text-gray-400 font-medium">{unit}</span>
        </div>
      </div>
      <div className="text-center">
        <div className="text-xs font-bold text-gray-600">{label}</div>
        <div className="text-xs text-gray-400">{pct}%</div>
      </div>
    </div>
  );
}

export default function MacroSummary({ macros }: MacroSummaryProps) {
  const kcalPct = Math.min(100, Math.round((macros.kcal / TARGET_MACROS.kcal) * 100));

  // Ring for kcal
  const kcalRadius = 44;
  const kcalCircumference = 2 * Math.PI * kcalRadius;
  const kcalDashOffset = kcalCircumference - (kcalCircumference * kcalPct) / 100;

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Top kcal hero section */}
      <div className="bg-gradient-to-br from-orange-50 to-amber-50 px-4 pt-5 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Calorie giornaliere</div>
            <div className="flex items-end gap-1.5">
              <span className="text-5xl font-black text-orange-500 leading-none">{macros.kcal}</span>
              <span className="text-lg text-gray-400 font-medium mb-1">/ {TARGET_MACROS.kcal}</span>
            </div>
            <div className="text-sm text-orange-600 font-semibold mt-1">
              {kcalPct}% del fabbisogno
            </div>
          </div>

          {/* Large kcal ring */}
          <div className="relative" style={{ width: 104, height: 104 }}>
            <svg width="104" height="104" viewBox="0 0 104 104" className="-rotate-90">
              <circle cx="52" cy="52" r={kcalRadius} fill="none" stroke="#fed7aa" strokeWidth="9" />
              <circle
                cx="52"
                cy="52"
                r={kcalRadius}
                fill="none"
                stroke="url(#kcalGrad)"
                strokeWidth="9"
                strokeLinecap="round"
                strokeDasharray={kcalCircumference}
                strokeDashoffset={kcalDashOffset}
                style={{ transition: 'stroke-dashoffset 0.8s cubic-bezier(0.25,0.46,0.45,0.94)' }}
              />
              <defs>
                <linearGradient id="kcalGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#fb923c" />
                  <stop offset="100%" stopColor="#f97316" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-black text-orange-500 leading-none">{kcalPct}%</span>
              <span className="text-xs text-gray-400 font-medium">kcal</span>
            </div>
          </div>
        </div>

        {/* Kcal bar */}
        <div className="mt-3 h-3 bg-orange-100 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-orange-400 to-orange-500 transition-all duration-700"
            style={{ width: `${kcalPct}%` }}
          />
        </div>
      </div>

      {/* Macro rings row */}
      <div className="px-4 py-4">
        <div className="grid grid-cols-3 gap-3">
          <MacroRing
            value={macros.proteine}
            target={TARGET_MACROS.proteine}
            label="Proteine"
            unit="g"
            color="#3b82f6"
            trackColor="#dbeafe"
            textColor="text-blue-600"
          />
          <MacroRing
            value={macros.carboidrati}
            target={TARGET_MACROS.carboidrati}
            label="Carboidrati"
            unit="g"
            color="#f59e0b"
            trackColor="#fef3c7"
            textColor="text-yellow-600"
          />
          <MacroRing
            value={macros.grassi}
            target={TARGET_MACROS.grassi}
            label="Grassi"
            unit="g"
            color="#ef4444"
            trackColor="#fee2e2"
            textColor="text-red-500"
          />
        </div>
      </div>
    </div>
  );
}
