const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const common = require('./webpack.common.config.js')

module.exports = merge(common, {
  entry: {
    app: ['./src/app.js']
  },
  plugins: [
    new UglifyJSPlugin(), // 移除上下文中的未引用代码
    new CleanWebpackPlugin(['dist'], { // 移除文件夹
      root: __dirname,
      verbose: true,
      dry: false
    })
  ]
})
