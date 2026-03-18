'use client';

import { useEffect, useState } from 'react';

// BeforeInstallPromptEvent is not in the standard TS lib yet
interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
  prompt(): Promise<void>;
}

export default function ServiceWorkerRegister() {
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [bannerVisible, setBannerVisible] = useState(false);
  const [dismissed, setDismissed]         = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const wasDismissed = localStorage.getItem('pwa-install-dismissed');
    if (wasDismissed) return;

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/meal-planner/sw.js', { scope: '/meal-planner/' })
        .then((registration) => {
          console.log('[SW] Registrato con scope:', registration.scope);
        })
        .catch((err) => {
          console.error('[SW] Registrazione fallita:', err);
        });
    }

    const handler = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e as BeforeInstallPromptEvent);
      setBannerVisible(true);
    };

    window.addEventListener('beforeinstallprompt', handler);
    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstall = async () => {
    if (!installPrompt) return;
    await installPrompt.prompt();
    const choice = await installPrompt.userChoice;
    if (choice.outcome === 'accepted') {
      console.log('[PWA] Installazione accettata');
    }
    setInstallPrompt(null);
    setBannerVisible(false);
  };

  const handleDismiss = () => {
    setBannerVisible(false);
    setDismissed(true);
    localStorage.setItem('pwa-install-dismissed', '1');
  };

  if (!bannerVisible || dismissed) return null;

  return (
    <div
      role="banner"
      className="fixed top-0 left-0 right-0 z-50 px-4 py-3 flex items-center justify-between shadow-sm"
      style={{ background: '#FBE9E0', borderBottom: '1px solid #F0E6D8' }}
    >
      <div className="flex items-center gap-2 text-sm font-medium" style={{ color: '#2D2016' }}>
        <span className="text-xl">📲</span>
        <span>Aggiungimi alla schermata home per avermi sempre a portata di mano!</span>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <button
          onClick={handleInstall}
          className="text-xs font-bold px-3 py-1.5 rounded-full shadow active:scale-95 transition-transform"
          style={{ background: '#E8734A', color: '#FFFFFF' }}
        >
          Installa
        </button>
        <button
          onClick={handleDismiss}
          aria-label="Chiudi"
          className="text-lg leading-none px-1 opacity-60 hover:opacity-100 transition-opacity"
          style={{ color: '#8B7355' }}
        >
          ✕
        </button>
      </div>
    </div>
  );
}
