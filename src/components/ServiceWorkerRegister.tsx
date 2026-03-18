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
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Do nothing in non-browser environments (SSR safety)
    if (typeof window === 'undefined') return;

    // Avoid showing banner if user already dismissed it in a previous session
    const wasDismissed = localStorage.getItem('pwa-install-dismissed');
    if (wasDismissed) return;

    // Register the service worker
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

    // Listen for the browser's install prompt
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
      console.log('[PWA] Utente ha accettato l\'installazione');
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
      className="fixed top-0 left-0 right-0 z-50 bg-orange-500 text-white px-4 py-3 flex items-center justify-between shadow-lg"
    >
      <div className="flex items-center gap-2 text-sm font-medium">
        <span className="text-xl">📲</span>
        <span>Installa l&apos;app sul telefono!</span>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={handleInstall}
          className="bg-white text-orange-600 text-xs font-bold px-3 py-1.5 rounded-full shadow active:scale-95 transition-transform"
        >
          Installa
        </button>
        <button
          onClick={handleDismiss}
          aria-label="Chiudi"
          className="text-white text-lg leading-none opacity-80 hover:opacity-100 px-1"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
