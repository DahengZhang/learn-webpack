const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const merge = require('webpack-merge')
const common = require('./webpack.common.config.js')

module.exports = merge(common, {
  entry: {
    app: ['./src/app.js']
  },
  plugins: [
    new UglifyJSPlugin(), // 移除上下文中的未引用代码
  ]
})
