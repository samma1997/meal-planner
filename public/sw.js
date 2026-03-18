// Service Worker — Piano Pasti Luca
// Version bump here forces cache invalidation on all clients
const CACHE_VERSION = 'v1';
const CACHE_NAME = `piano-pasti-${CACHE_VERSION}`;
const BASE_PATH = '/meal-planner';

// All static assets to pre-cache on install
const PRECACHE_URLS = [
  `${BASE_PATH}/`,
  `${BASE_PATH}/index.html`,
  `${BASE_PATH}/settimana/`,
  `${BASE_PATH}/spesa/`,
  `${BASE_PATH}/manifest.json`,
  `${BASE_PATH}/icons/icon-192.png`,
  `${BASE_PATH}/icons/icon-512.png`,
];

// ─── Install ──────────────────────────────────────────────────────────────────
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

// ─── Activate ─────────────────────────────────────────────────────────────────
// Remove all caches that don't match the current version
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter((name) => name.startsWith('piano-pasti-') && name !== CACHE_NAME)
            .map((name) => caches.delete(name))
        )
      )
      .then(() => self.clients.claim())
  );
});

// ─── Fetch — Cache First ───────────────────────────────────────────────────────
// For navigation requests and same-origin assets use cache-first with network fallback.
// Cross-origin requests (Google Fonts, etc.) are passed through without caching.
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Only handle requests from our own origin
  if (url.origin !== location.origin) return;

  // Cache-first strategy
  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;

      return fetch(request)
        .then((response) => {
          // Only cache successful, non-opaque responses
          if (!response || response.status !== 200 || response.type === 'opaque') {
            return response;
          }

          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, responseClone));

          return response;
        })
        .catch(() => {
          // For navigate requests, return the cached home page as fallback
          if (request.mode === 'navigate') {
            return caches.match(`${BASE_PATH}/`) || caches.match(`${BASE_PATH}/index.html`);
          }
        });
    })
  );
});

// ─── Push Notifications ───────────────────────────────────────────────────────
self.addEventListener('push', (event) => {
  let data = { title: 'Piano Pasti', body: 'Controlla il tuo piano pasti!', icon: `${BASE_PATH}/icons/icon-192.png` };

  if (event.data) {
    try {
      data = event.data.json();
    } catch {
      data.body = event.data.text();
    }
  }

  const options = {
    body: data.body,
    icon: data.icon || `${BASE_PATH}/icons/icon-192.png`,
    badge: `${BASE_PATH}/icons/icon-192.png`,
    vibrate: [100, 50, 100],
    data: { url: data.url || `${BASE_PATH}/` },
    actions: [
      { action: 'open', title: 'Apri app' },
      { action: 'dismiss', title: 'Ignora' },
    ],
  };

  event.waitUntil(self.registration.showNotification(data.title, options));
});

// ─── Notification Click ───────────────────────────────────────────────────────
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'dismiss') return;

  const targetUrl = (event.notification.data && event.notification.data.url)
    ? event.notification.data.url
    : `${BASE_PATH}/`;

  event.waitUntil(
    clients
      .matchAll({ type: 'window', includeUncontrolled: true })
      .then((clientList) => {
        // If a window is already open, focus it and navigate
        for (const client of clientList) {
          if ('focus' in client) {
            client.focus();
            if ('navigate' in client) client.navigate(targetUrl);
            return;
          }
        }
        // Otherwise open a new window
        if (clients.openWindow) return clients.openWindow(targetUrl);
      })
  );
});
