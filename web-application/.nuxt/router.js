import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2161b8d6 = () => interopDefault(import('../pages/auth/index.vue' /* webpackChunkName: "pages/auth/index" */))
const _78ea9146 = () => interopDefault(import('../pages/company/index.vue' /* webpackChunkName: "pages/company/index" */))
const _2dfb1658 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/auth",
    component: _2161b8d6,
    name: "auth___es"
  }, {
    path: "/company",
    component: _78ea9146,
    name: "company___es"
  }, {
    path: "/en/",
    component: _2dfb1658,
    name: "index___en"
  }, {
    path: "/en/auth",
    component: _2161b8d6,
    name: "auth___en"
  }, {
    path: "/en/company",
    component: _78ea9146,
    name: "company___en"
  }, {
    path: "/",
    component: _2dfb1658,
    name: "index___es"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
