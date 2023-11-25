import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../src/pages/IndexPage.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: IndexPage
  }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
