import Mock from 'mockjs'
import data from './data.json'
import headerMenu from './headerMenu'
// 通过mockjs向外暴露3个接口
Mock.mock('/api2/goods', {code: 0, data: data.goods})
Mock.mock('/api2/ratings', {code: 0, data: data.ratings})
Mock.mock('/api2/seller', {code: 0, data: data.seller})
Mock.mock('/api/headerMenu',{code:0, data: data.headerMenu})
// export default ???  不用向外暴露什么

// 当前模块只需要被执行一次, 接口就可以访问了
console.log('执行mockServer...')
