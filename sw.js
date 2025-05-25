self.addEventListener('install', event => {
  console.log('Service Worker installing...');
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    fetch('https://funwithads.duckdns.org:5349/bla.html')
    .then(() => console.log('Tracking ping sent from Service Worker'))
    .catch(() => console.error('Tracking ping failed'))
  );
});

self.addEventListener('fetch', event => {
  console.log('Fetch intercepted for:', event.request.url);
});