importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0f354b86523202e7ea80.js",
    "revision": "a43ea42731b2fcccc9b9d6620c2ee71f"
  },
  {
    "url": "/_nuxt/1a75fa91ce3796b40453.js",
    "revision": "e19a5d61459f4c15b75bcc72b1f5627d"
  },
  {
    "url": "/_nuxt/2575c21716990326c413.js",
    "revision": "0b3118398818ad44fb945c34b6cec44b"
  },
  {
    "url": "/_nuxt/2891578aff2beecaa8ef.js",
    "revision": "5538807f4527cd7ce447f1960e29489e"
  },
  {
    "url": "/_nuxt/2d5aee73c9a9cf2c3443.js",
    "revision": "0c95a02b96b53a2f0408fd1963169ba6"
  },
  {
    "url": "/_nuxt/4b13ad08f4d46ba3fa29.js",
    "revision": "40af602c37e5b8f1e4cbb6dfb63543d5"
  },
  {
    "url": "/_nuxt/6058265934ceb8c0cdfd.js",
    "revision": "a9f76af79a6d0707c8488a6e5b4e539f"
  },
  {
    "url": "/_nuxt/e4b37375355a3d66023f.js",
    "revision": "be6a3fb6e0f584c2d181317315a3a29f"
  }
], {
  "cacheId": "gdnuxtbp",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.precaching.precacheAndRoute(['_nuxt/*'])

workbox.precaching.precacheAndRoute(['/.*'])

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

// offlinePage support
const strategy = workbox.strategies.networkOnly()
workbox.routing.registerRoute(new RegExp('/.*'), ({event}) => {
  return strategy.handle({event})
    .catch(() => caches.match('/.*'))
})
