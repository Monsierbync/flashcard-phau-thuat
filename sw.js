/* Service worker — Flashcard Phẫu thuật
   Cache-first với fallback mạng; bump CACHE để user nhận bản mới sau khi deploy
   (activate sẽ dọn cache cũ; index.html luôn lấy mạng-ưu-tiên để không học nhầm bản cũ). */
const CACHE = 'fc-pt-v1.2';
const SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-180.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;
  // index: mạng trước (bắt bản mới), rớt mạng thì lấy cache (offline)
  const isIndex = url.pathname.endsWith('/') || url.pathname.endsWith('index.html') || url.pathname.endsWith('.html');
  if (isIndex) {
    e.respondWith(
      fetch(e.request)
        .then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return res; })
        .catch(() => caches.match(e.request, { ignoreSearch: true }).then(m => m || caches.match('./')))
    );
    return;
  }
  // tài nguyên tĩnh: cache trước
  e.respondWith(
    caches.match(e.request).then(hit =>
      hit ||
      fetch(e.request).then(res => {
        if (res && res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }
        return res;
      }).catch(() => caches.match('./'))
    )
  );
});
