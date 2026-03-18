'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: '/',          label: 'Oggi',      icon: '🏠' },
    { href: '/settimana', label: 'Settimana',  icon: '📅' },
    { href: '/spesa',     label: 'Spesa',     icon: '🛒' },
    { href: '/frigo',     label: 'Frigo',     icon: '🧊' },
    { href: '/badge',     label: 'Traguardi', icon: '🏅' },
  ];

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50"
      style={{ background: '#FFFFFF', borderTop: '1px solid #F0E6D8' }}
    >
      <div className="max-w-2xl mx-auto flex justify-around items-center py-2 px-1">
        {links.map(link => {
          const isActive = link.href === '/'
            ? pathname === '/' || pathname.startsWith('/giorno')
            : pathname.startsWith(link.href);

          return (
            <Link
              key={link.href}
              href={link.href}
              className="relative flex flex-col items-center gap-0.5 px-4 py-2 transition-transform duration-150 active:scale-90 flex-1"
            >
              {/* Active top border indicator */}
              {isActive && (
                <span
                  className="absolute top-0 left-3 right-3 h-0.5 rounded-full"
                  style={{ background: '#E8734A' }}
                />
              )}

              <span
                className="transition-all duration-200"
                style={{ fontSize: isActive ? '26px' : '22px', lineHeight: 1 }}
              >
                {link.icon}
              </span>
              <span
                className="text-xs font-bold transition-colors duration-200"
                style={{ color: isActive ? '#E8734A' : '#8B7355' }}
              >
                {link.label}
              </span>
            </Link>
          );
        })}
      </div>

      {/* Safe area spacer */}
      <div className="h-safe-area-inset-bottom" style={{ background: '#FFFFFF' }} />
    </nav>
  );
}
