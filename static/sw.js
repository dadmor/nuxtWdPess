importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/17a6929b5b464a4546d2.js",
    "revision": "c5b11d4276f5746cc1de1618187375d1"
  },
  {
    "url": "/_nuxt/228349e50d65f3283036.js",
    "revision": "a49c95a4deff2064f9ffd6a9610c5b84"
  },
  {
    "url": "/_nuxt/40e6d243e8d0e9b552fe.js",
    "revision": "5b618928b31583756a24c989aef4c7e6"
  },
  {
    "url": "/_nuxt/c0b60cfd15c17b6abc18.js",
    "revision": "2fbe6eda044a5735263f797a48d0f1bf"
  },
  {
    "url": "/_nuxt/c995580f1dc4cb94573c.js",
    "revision": "e8a31e7a0810e88d9c5f5d23068d40fc"
  },
  {
    "url": "/_nuxt/e23f825d8055791efd53.js",
    "revision": "e506238c37252c9ac6e40296c6521555"
  },
  {
    "url": "/_nuxt/eefb1db813ca08612b27.js",
    "revision": "f8392cc4d938402e758e1cd1e68609a4"
  },
  {
    "url": "/_nuxt/fc25bf5ba0eca1acb87f.js",
    "revision": "656680ab766510f11c3a060ef3243d64"
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
