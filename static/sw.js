importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/277f23efabe9c9236491.js",
    "revision": "7aa4171a05537f277636c6fe7a5fcd71"
  },
  {
    "url": "/_nuxt/728b317d4f9af30ae05c.js",
    "revision": "2636641dc7460ea542c8b24ce9a584ff"
  },
  {
    "url": "/_nuxt/93b925eddaa8de64c09d.js",
    "revision": "43cd91aeb77396b7c1f20680f2485689"
  },
  {
    "url": "/_nuxt/b7e6261d987def0129cd.js",
    "revision": "4e81d00e0221c5e58bc1fa3261686880"
  },
  {
    "url": "/_nuxt/bd1e2a95ea2699379f86.js",
    "revision": "293d058328d3cdce55bb04a6d16d977c"
  },
  {
    "url": "/_nuxt/f7da54572eed995f5876.js",
    "revision": "558c5a13d08e5a3e487ac73fede3c0dd"
  },
  {
    "url": "/_nuxt/f848b914d1d09ce68499.js",
    "revision": "e9a21c89de98d12f72076cf815532576"
  },
  {
    "url": "/_nuxt/fe5c9ffc8724b2d551a0.js",
    "revision": "75347f54cf3da8b8d89600128b1c9299"
  }
], {
  "cacheId": "gdnuxtbp",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
