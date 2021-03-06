import Mock from 'mockjs'

import jQueryOperationMethodData from './jQueryOperationMethodData'
import jQuerySelectorData from './jQuerySelectorData'
import AJAXResponseStateCodeData from './AJAXResponseStateCodeData.json'
// 通过mockjs向外暴露接口
Mock.mock('/api/jQueryOperationMethodData',{code:200, data: jQueryOperationMethodData})
Mock.mock('/api/jQuerySelectorData',{code:200, data: jQuerySelectorData})
Mock.mock('/api/AJAXResponseStateCodeData',{code:200, data: AJAXResponseStateCodeData})
// export default ???  不用向外暴露什么

// 当前模块只需要被执行一次, 接口就可以访问了
console.log('执行mockServer...')
