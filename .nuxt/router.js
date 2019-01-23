import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _df6a1904 = () => interopDefault(import('../pages/news/_page.vue' /* webpackChunkName: "pages/news/_page" */))
const _9e6a01b2 = () => interopDefault(import('../pages/post/_slug.vue' /* webpackChunkName: "pages/post/_slug" */))
const _6b63dad7 = () => interopDefault(import('../pages/tag/_tags_page.vue' /* webpackChunkName: "pages/tag/_tags_page" */))
const _2b15a058 = () => interopDefault(import('../pages/category/_cat_slug/_id/_page.vue' /* webpackChunkName: "pages/category/_cat_slug/_id/_page" */))
const _1b011936 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/news/:page?",
      component: _df6a1904,
      name: "news-page"
    }, {
      path: "/post/:slug?",
      component: _9e6a01b2,
      name: "post-slug"
    }, {
      path: "/tag/:tags_page?",
      component: _6b63dad7,
      name: "tag-tags_page"
    }, {
      path: "/category/:cat_slug?/:id?/:page?",
      component: _2b15a058,
      name: "category-cat_slug-id-page"
    }, {
      path: "/",
      component: _1b011936,
      name: "index"
    }],

    fallback: false
  })
}
