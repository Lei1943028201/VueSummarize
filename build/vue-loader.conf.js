var utils = require('./utils')
var config = require('../config')
// 当前是否是生产环境
var isProduction = process.env.NODE_ENV === 'production'
// 专为vue-loader准备的配置对象
module.exports = {
  // 指定样式相关的loader配置
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,  // 是否开启sourceMap
    extract: isProduction // 是否抽取css文件
  })
}
