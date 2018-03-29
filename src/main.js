import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './mock/mockServer'
//引入element-ui样式表
import 'element-ui/lib/theme-chalk/index.css';
//按需引入element-ui组件
import { Button } from 'element-ui'

Vue.use(Button)
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
