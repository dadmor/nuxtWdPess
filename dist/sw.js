importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1b382e191a2908f2b8d1.js",
    "revision": "85afd3d099004a13e605a3611ba802ce"
  },
  {
    "url": "/_nuxt/413c6034572a2840ae84.js",
    "revision": "0ac203c70d5c3421a3bc2b84d1c61923"
  },
  {
    "url": "/_nuxt/4dc01b37636d948ea4d3.js",
    "revision": "816bdd92a227f1eee5916f06b847c5e6"
  },
  {
    "url": "/_nuxt/543f8aaf1d7179b49b2f.js",
    "revision": "560e8e3d4bd5f5d8e24437f6511a8a83"
  },
  {
    "url": "/_nuxt/70ede6736fb9d87d5d35.js",
    "revision": "11f68aff83c0cac9ede825ef98e7545a"
  },
  {
    "url": "/_nuxt/a44f013a0633291c30df.js",
    "revision": "48f85f862f7aaab0d781f7e877ab565d"
  },
  {
    "url": "/_nuxt/ca506077a325e65d83ba.js",
    "revision": "4a2d9ae46e203314f3f1c0cfd214c32a"
  },
  {
    "url": "/_nuxt/cce4d7a1ef7a54c06541.js",
    "revision": "d2ec3b428d079cde6e7a1829fb636e62"
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
