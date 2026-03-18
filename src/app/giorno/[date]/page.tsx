import { getDayPlan, parseDateKey, formatDateKey } from '@/data/utils';
import DayView from '@/components/DayView';
import Link from 'next/link';

interface Props {
  params: Promise<{ date: string }>;
}

export async function generateStaticParams() {
  const params: { date: string }[] = [];
  const start   = new Date(2024, 0, 1);
  const end     = new Date(2027, 11, 31);
  const current = new Date(start);

  while (current <= end) {
    params.push({ date: formatDateKey(current) });
    current.setDate(current.getDate() + 1);
  }

  return params;
}

export default async function GiornoPage({ params }: Props) {
  const { date }   = await params;
  const parsedDate = parseDateKey(date);
  const plan       = getDayPlan(parsedDate);

  return (
    <div className="space-y-4">
      {/* Back button */}
      <div className="flex items-center gap-3 pt-1">
        <Link
          href="/"
          className="flex items-center gap-1.5 font-bold text-sm px-3.5 py-2.5 rounded-xl shadow-sm active:scale-95 transition-transform"
          style={{ background: '#FFFFFF', border: '1px solid #F0E6D8', color: '#8B7355' }}
        >
          <span className="text-base">←</span>
          <span>Home</span>
        </Link>
        <h1
          className="text-lg font-black"
          style={{ color: '#2D2016' }}
        >
          Dettaglio Giorno
        </h1>
      </div>
      <DayView plan={plan} date={parsedDate} showNavigation={true} />
    </div>
  );
}
