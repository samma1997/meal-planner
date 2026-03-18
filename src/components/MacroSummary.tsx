'use client';

import { useState } from 'react';
import { Macros } from '@/data/types';
import { TARGET_MACROS } from '@/data/utils';

interface MacroSummaryProps {
  macros: Macros;
}

export default function MacroSummary({ macros }: MacroSummaryProps) {
  const [open, setOpen] = useState(false);

  const kcalPct     = Math.min(100, Math.round((macros.kcal / TARGET_MACROS.kcal) * 100));
  const protPct     = Math.min(100, Math.round((macros.proteine / TARGET_MACROS.proteine) * 100));
  const carbPct     = Math.min(100, Math.round((macros.carboidrati / TARGET_MACROS.carboidrati) * 100));
  const grassiPct   = Math.min(100, Math.round((macros.grassi / TARGET_MACROS.grassi) * 100));

  return (
    <div
      className="rounded-2xl overflow-hidden shadow-sm"
      style={{ background: '#FFFFFF', border: '1px solid #F0E6D8' }}
    >
      {/* Toggle button */}
      <button
        className="w-full flex items-center justify-between px-4 py-3.5 active:scale-[0.99] transition-transform"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <div className="flex items-center gap-2">
          <span className="text-base">📊</span>
          <span
            className="text-sm font-semibold"
            style={{ color: '#8B7355' }}
          >
            Info nutrizionali per Luca
          </span>
        </div>
        <span
          className="inline-block transition-transform duration-300 text-base"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', color: '#8B7355' }}
        >
          ▾
        </span>
      </button>

      {/* Collapsible macro bars */}
      {open && (
        <div
          className="expand-enter px-4 pb-4 space-y-4"
          style={{ borderTop: '1px solid #F0E6D8' }}
        >
          {/* Kcal */}
          <div className="mt-3">
            <div className="flex justify-between text-xs mb-1.5">
              <span className="font-bold" style={{ color: '#2D2016' }}>
                Calorie
              </span>
              <span className="font-bold" style={{ color: '#E8734A' }}>
                {macros.kcal} / {TARGET_MACROS.kcal} kcal ({kcalPct}%)
              </span>
            </div>
            <div className="h-3 rounded-full overflow-hidden" style={{ background: '#F0E6D8' }}>
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{ width: `${kcalPct}%`, background: '#E8734A' }}
              />
            </div>
          </div>

          {/* Proteine */}
          <div>
            <div className="flex justify-between text-xs mb-1.5">
              <span className="font-bold" style={{ color: '#2D2016' }}>Proteine</span>
              <span className="font-semibold" style={{ color: '#8B7355' }}>
                {macros.proteine}g / {TARGET_MACROS.proteine}g ({protPct}%)
              </span>
            </div>
            <div className="h-2.5 rounded-full overflow-hidden" style={{ background: '#F0E6D8' }}>
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{ width: `${protPct}%`, background: '#7BA7C4' }}
              />
            </div>
          </div>

          {/* Carboidrati */}
          <div>
            <div className="flex justify-between text-xs mb-1.5">
              <span className="font-bold" style={{ color: '#2D2016' }}>Carboidrati</span>
              <span className="font-semibold" style={{ color: '#8B7355' }}>
                {macros.carboidrati}g / {TARGET_MACROS.carboidrati}g ({carbPct}%)
              </span>
            </div>
            <div className="h-2.5 rounded-full overflow-hidden" style={{ background: '#F0E6D8' }}>
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{ width: `${carbPct}%`, background: '#F4C430' }}
              />
            </div>
          </div>

          {/* Grassi */}
          <div>
            <div className="flex justify-between text-xs mb-1.5">
              <span className="font-bold" style={{ color: '#2D2016' }}>Grassi</span>
              <span className="font-semibold" style={{ color: '#8B7355' }}>
                {macros.grassi}g / {TARGET_MACROS.grassi}g ({grassiPct}%)
              </span>
            </div>
            <div className="h-2.5 rounded-full overflow-hidden" style={{ background: '#F0E6D8' }}>
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{ width: `${grassiPct}%`, background: '#6B9E6B' }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
