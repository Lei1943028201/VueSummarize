import Vue from 'vue'
import VueRouter from 'vue-router'
import goods from '../pages/goods/goods.vue'
import ratings from '../pages/ratings/ratings.vue'
import seller from '../pages/seller/seller.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      'redirect': '/goods'
    },
    {
      path: '/goods',
      component: goods,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/ratings',
      component: ratings,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/seller',
      component: seller,
      meta: {
        showFooter: false
      },

    },

  ]
})
