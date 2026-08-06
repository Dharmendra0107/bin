/* Minimal service worker: keeps the app installable and gives a fallback
   when the network drops mid-visit. Deliberately simple — network-first
   for the page itself (so visitors never see stale content), cache-first
   for local static assets (images/fonts/icons) once they've been seen. */
const CACHE_NAME = 'dk-portfolio-v1';
const CORE_ASSETS = ['/', '/index.html', '/manifest.json', '/images/dklogo.png'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  const isSameOrigin = url.origin === self.location.origin;
  const isHTML = req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html');

  if (isSameOrigin && isHTML) {
    // Network-first for pages, falling back to cache when offline.
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
          return res;
        })
        .catch(() => caches.match(req).then((cached) => cached || caches.match('/index.html')))
    );
    return;
  }

  if (isSameOrigin && /\.(png|jpg|jpeg|webp|svg|gif|ico|woff2?|css|js)$/.test(url.pathname)) {
    // Cache-first for static assets.
    event.respondWith(
      caches.match(req).then((cached) => {
        if (cached) return cached;
        return fetch(req).then((res) => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
          return res;
        });
      })
    );
  }
});
