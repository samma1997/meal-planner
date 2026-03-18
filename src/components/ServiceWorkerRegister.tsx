'use client';

import { useEffect, useState } from 'react';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
  prompt(): Promise<void>;
}

function isIOS(): boolean {
  if (typeof navigator === 'undefined') return false;
  return /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.userAgent.includes('Mac') && 'ontouchend' in document);
}

function isStandalone(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(display-mode: standalone)').matches ||
    ('standalone' in window.navigator && (window.navigator as unknown as { standalone: boolean }).standalone);
}

export default function ServiceWorkerRegister() {
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const [showAndroidBanner, setShowAndroidBanner] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Always register SW
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/meal-planner/sw.js', { scope: '/meal-planner/' })
        .then((reg) => console.log('[SW] Registrato:', reg.scope))
        .catch((err) => console.error('[SW] Errore:', err));
    }

    // Don't show banners if already installed or previously dismissed
    if (isStandalone()) return;
    const wasDismissed = localStorage.getItem('pwa-install-dismissed');
    if (wasDismissed) return;

    // iOS: show manual guide
    if (isIOS()) {
      setShowIOSGuide(true);
      return;
    }

    // Android/Chrome: listen for install prompt
    const handler = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e as BeforeInstallPromptEvent);
      setShowAndroidBanner(true);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!installPrompt) return;
    await installPrompt.prompt();
    const choice = await installPrompt.userChoice;
    if (choice.outcome === 'accepted') {
      console.log('[PWA] Installata');
    }
    setInstallPrompt(null);
    setShowAndroidBanner(false);
  };

  const handleDismiss = () => {
    setShowIOSGuide(false);
    setShowAndroidBanner(false);
    setDismissed(true);
    localStorage.setItem('pwa-install-dismissed', '1');
  };

  if (dismissed) return null;

  // iOS Guide
  if (showIOSGuide) {
    return (
      <div className="mx-auto max-w-2xl px-4 pt-2">
        <div
          className="rounded-2xl p-4 shadow-sm"
          style={{ background: '#FBE9E0', border: '1px solid #F0E6D8' }}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-bold" style={{ color: '#2D2016' }}>
                📲 Installa l&apos;app sul telefono!
              </p>
              <div className="mt-2 text-xs space-y-1" style={{ color: '#2D2016' }}>
                <p>1. Tocca il pulsante <strong>Condividi</strong> <span style={{ fontSize: '16px' }}>⬆️</span> in basso</p>
                <p>2. Scorri e tocca <strong>&quot;Aggiungi alla schermata Home&quot;</strong></p>
                <p>3. Tocca <strong>&quot;Aggiungi&quot;</strong> in alto a destra</p>
              </div>
              <p className="mt-2 text-xs" style={{ color: '#8B7355' }}>
                Così mi trovi come un&apos;app vera! 💪
              </p>
            </div>
            <button
              onClick={handleDismiss}
              aria-label="Chiudi"
              className="text-lg leading-none px-1 opacity-60 hover:opacity-100 transition-opacity shrink-0"
              style={{ color: '#8B7355' }}
            >
              ✕
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Android/Chrome Banner
  if (showAndroidBanner) {
    return (
      <div className="mx-auto max-w-2xl px-4 pt-2">
        <div
          className="rounded-2xl p-4 flex items-center justify-between gap-3 shadow-sm"
          style={{ background: '#FBE9E0', border: '1px solid #F0E6D8' }}
        >
          <div className="flex items-center gap-2 text-sm font-medium" style={{ color: '#2D2016' }}>
            <span className="text-xl">📲</span>
            <span>Installa l&apos;app sul telefono!</span>
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
      </div>
    );
  }

  return null;
}
