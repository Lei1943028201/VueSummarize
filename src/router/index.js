import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../pages/Home/Home')

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      'redirect': '/home'
    },
    {
      path: '/home',
      component: Home,
      meta: {
        showFooter: true
      }
    },

  ]
})
