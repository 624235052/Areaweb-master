import Vue from 'vue'
import VueRouter from 'vue-router'
import Area from '../components/Area.vue'
import AreaAddNew from '../components/AreaAddNew.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Area
  },
  {
    path: '/area',
    name: 'Area',
    component: Area
  },
  {
    path: '/addarea',
    name: 'AddArea',
    component: AreaAddNew
  },   
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router