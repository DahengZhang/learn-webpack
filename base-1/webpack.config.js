const path = require('path')
const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const hotMiddlewareScript = 'webpack-hot-middleware/client' // 后面接 ? 是给 webpack-hot-middleware 设置参数 reload=true 表示如果碰到不能hot reload的情况，就整页刷新

module.exports = {
  entry: {
    app: ['./src/app.js', hotMiddlewareScript]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // 开启热更新
    new webpack.NoErrorsPlugin(), // 跳过编译时出错的代码并记录，使编译后运行时的包不会发生错误
    new UglifyJSPlugin() // 移除上下文中的未引用代码
  ]
}
