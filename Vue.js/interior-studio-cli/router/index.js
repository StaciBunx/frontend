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
  },
  {
    path: '/projects-details',
    name: 'projectDetatils',
    component: () => import('../src/pages/ProjectDetailsPage.vue')
  },
  {
    path: '/articles',
    name: 'articles',
    component: () => import('../src/pages/ArticlesPage.vue')
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('../src/pages/Error404Page.vue')
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
