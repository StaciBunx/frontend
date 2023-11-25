import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../src/pages/IndexPage.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: IndexPage
  },
  {
    path: '/project',
    name: 'project',
    component: () => import('../src/pages/ProjectsPage.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../src/pages/BlogPage.vue')
  }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
