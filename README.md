#目录结构说明
	├─build
	│   ├─build.js
	│   ├─check-versions.js
	│   ├─dev-client.js
	│   ├─dev-server.js
	│   ├─utils.js
	│   ├─vue-loader.conf.js
	│   ├─webpack.base.conf.js
	│   ├─webpack.dev.conf.js
	│   ├─webpack.prod.conf.js
	│   └─webpack.test.conf.js
	├─config
	│   ├─dev.env.js
	│   ├─index.js
	│   ├─prod.env.js
	│   └─test.env.js
	├─dist	项目打包文件
	├─src	项目源码文件
	│   ├─common		公共代码库
	│   ├─components	非路由组件库
	│   ├─page			路由组件库
	│   ├─router		路由
	│   │  └─index.js
	│   ├─store			vuex文件夹
	│	│  ├─actions.js
	│	│  ├─getters.js
	│	│  ├─index.js
	│	│  ├─mutation-types.js
	│	│  ├─mutations.js
	│   │  └─state.js		
	│   ├─app.vue
	│   └─main.js		
	├─.babelrc
	├─.editorconfig
	├─.eslintignore
	├─.eslintrc.js
	├─.gitignore
	├─.postcssrc.js
	├─README.md
	├─index.html
	├─server.js
	├─package-lock.json
	└─package.json
# 项目包含的知识点
## wabpack
	通过webpack实现项目的打包压缩，热加载
## eslint代码检查
	检测语法错误，标准化代码规范
## vuex状态管理
	对应用中组件的状态进行集中式的管理(读/写)
## vue-router实现路由跳转
	实现单页面应用的基础
	结局地址栏路径显示#的问题
	在路由配置中添加 mode: 'history'
	例子：
	export default new Router({
	  mode: 'history',
	  routes: [
	    {
	      path: '/',
	      name: 'Hello',
	      component: Hello
	    }
	  ]
	})
## mokejs模拟数据
	前端在没有接口的情况下需要使用mockjs自行模拟需要的数据
## css预编译语言使用stylus
	stylus的优势为语法书写简洁！！！ 因为我懒。。。。
## 使用element-ui作为pc端组件库
	由于项目需要兼容ie9及ie9以上浏览器，故flex布局无法使用
	为啥使它？ 因为好使！
## 关于npm run build 之后报错的问题
	你得自己起一个server才能访问这些页面
	
	例子:
	在项目的根目录新建一个server.js,代码如下
	
	var express = require('express')
	var app = express()
	
	app.use(express.static('./dist'))
	
	app.get('/', function (req, res) {
	  res.send('Hello Vue')
	})
	
	app.listen(2333)
	然后在一个终端里启动这个server: 输入命令 node server.js
	然后浏览器访问:http://localhost:2333
