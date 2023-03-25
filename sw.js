const CACHE_NAME = `random-word-generator`;
    
// Use the install event to pre-cache all initial resources.
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    cache.addAll([
      './',
      './request.js',
    ]);
  })());
});

self.addEventListener('fetch', event => {
  event.respondWith((async () => {
  //  const cache = await caches.open(CACHE_NAME);
		try {
          const fetchResponse = await fetch(event.request);
       //   cache.put(event.request, fetchResponse.clone());
          return fetchResponse;
        } catch (e) {
          // The network failed.
        }
 //   }
  })());
});