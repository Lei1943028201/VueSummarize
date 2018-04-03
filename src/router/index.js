import Vue from 'vue'
import VueRouter from 'vue-router'
const ElementUI = () => import('../pages/ElementUI/ElementUI')
const ElementUI2 = () => import('../pages/ElementUI2/ElementUI')
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      'redirect': '/elementUI'
    },
    {
      path: '/elementUI',
      component: ElementUI,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/elementUI2',
      component: ElementUI2,
      meta: {
        showFooter: false
      }
    },
  ]
})
