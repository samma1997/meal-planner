'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: '/',         label: 'Oggi',     icon: '🏠' },
    { href: '/settimana', label: 'Settimana', icon: '📅' },
    { href: '/spesa',    label: 'Spesa',    icon: '🛒' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50">
      {/* Glass blur background */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-xl border-t border-gray-200/80 shadow-2xl" />

      <div className="relative max-w-2xl mx-auto flex justify-around items-center py-2 px-2">
        {links.map(link => {
          const isActive = link.href === '/'
            ? pathname === '/' || pathname.startsWith('/giorno')
            : pathname.startsWith(link.href);

          return (
            <Link
              key={link.href}
              href={link.href}
              className="relative flex flex-col items-center gap-0.5 px-6 py-2 transition-transform duration-150 active:scale-90"
            >
              {/* Active pill indicator */}
              {isActive && (
                <span className="absolute inset-0 bg-orange-100 rounded-2xl" />
              )}

              <span
                className="relative z-10 transition-all duration-200"
                style={{ fontSize: isActive ? '28px' : '24px' }}
              >
                {link.icon}
              </span>
              <span
                className={`relative z-10 text-xs font-bold transition-colors duration-200 ${
                  isActive ? 'text-orange-600' : 'text-gray-400'
                }`}
              >
                {link.label}
              </span>
            </Link>
          );
        })}
      </div>

      {/* Safe area spacer for devices with home indicator */}
      <div className="h-safe-area-inset-bottom bg-white/80 backdrop-blur-xl" />
    </nav>
  );
}
