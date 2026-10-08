/* Scoreboard PRO - Service Worker
 * 一度開けば、電波がなくても起動できるようにファイルを端末にキャッシュします。
 *  - 画面(HTML): まず端末のキャッシュを表示 → 裏で最新版を取得(次回の起動から反映)
 *  - アイコンなど: キャッシュ優先
 * アプリを更新したときは、下の VERSION の数字を変えてください。
 */
const VERSION = 'scoreboard-v2';
const CORE = [
  './',
  './scoreboard.html',
  './manifest.webmanifest',
  './apple-touch-icon.png',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(VERSION)
      .then((cache) => Promise.all(CORE.map((url) => cache.add(url).catch(() => {}))))   // 1つ欠けても全体は失敗させない
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;     // 他サイトへの通信には関与しない

  const refresh = () =>
    fetch(req).then((res) => {
      if (res && res.ok) {
        const copy = res.clone();
        caches.open(VERSION).then((cache) => cache.put(req, copy));
      }
      return res;
    });

  if (req.mode === 'navigate') {
    // 画面: キャッシュがあれば即表示し、裏で更新。なければネットワーク。どちらもだめなら保存済みの画面。
    event.respondWith(
      caches.match(req).then((hit) => {
        const network = refresh().catch(() => null);
        if (hit) { event.waitUntil(network); return hit; }
        return network
          .then((res) => res || caches.match('./scoreboard.html'))
          .then((res) => res || caches.match('./'));
      })
    );
    return;
  }

  event.respondWith(
    caches.match(req).then((hit) => hit || refresh().catch(() => caches.match(req)))
  );
});
