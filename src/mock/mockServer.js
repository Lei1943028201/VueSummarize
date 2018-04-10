import Mock from 'mockjs'
import data from './data.json'
import jQuerySelectorData from './jQuerySelectorData.json'
// 通过mockjs向外暴露接口
Mock.mock('/api/headerMenu',{code:0, data: data.headerMenu})
Mock.mock('/api/jQuerySelectorData',{code:0, data: data.jQuerySelectorData})
// export default ???  不用向外暴露什么

// 当前模块只需要被执行一次, 接口就可以访问了
console.log('执行mockServer...')
