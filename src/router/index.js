import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../pages/Home/Home')
const jQuery = () => import('../pages/jQuery/jQuery')
const ajax = () => import('../pages/AJAX/AJAX')
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
        {
            path: '/jQuery',
            component: jQuery,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/ajax',
            component: ajax,
            meta: {
                showFooter: true
            }
        },
    ]
})
