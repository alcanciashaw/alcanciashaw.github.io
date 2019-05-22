import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dcart',
      name: 'dcart',
      component: () => import('./views/DCART.vue')
    },
    {
      path: '/AlcanciaShaw',
      name: 'AlcanciaShaw',
      component: () => import('./views/AlcanciaShaw.vue')
    },
    {
      path: '/Alice',
      name: 'Alice',
      component: () => import('./views/Alice.vue')
    },
    {
      path: '/Bom',
      name: 'Bom',
      component: () => import('./views/Bom.vue')
    },
    {
      path: '/HiyaKerrii',
      name: 'HiyaKerrii',
      component: () => import('./views/HiyaKerrii.vue')
    },
    {
      path: '/Apelyido',
      name: 'Apelyido',
      component: () => import('./views/Apelyido.vue')
    },
    {
      path: '/Dijkstra',
      name: 'Dijkstra',
      component: () => import('./views/Dijkstra.vue')
    },
    {
      path: '/Melamina',
      name: 'Melamina',
      component: () => import('./views/Melamina.vue')
    },
    {
      path: '/Timeline',
      name: 'Timeline',
      component: () => import('./views/Timeline.vue')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
  return { x: 0, y: 0 }
}
})
