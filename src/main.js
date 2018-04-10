import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './mock/mockServer'
//引入样式表
import 'element-ui/lib/theme-chalk/index.css';
import '../static/css/reset.css'
//按需引入element-ui组件
import ElementUI from 'element-ui'

Vue.use(ElementUI)
new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store
})
