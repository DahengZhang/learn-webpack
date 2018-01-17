const PATH = require('path');
const WEBPACK = require('webpack');

module.exports = {
   entry: {
      pageA: ['babel-polyfill', './src/page.a.js'],
      pageB: ['babel-polyfill', './src/page.b.js'],
      vendor: ['lodash']
   },
   output: {
      path: PATH.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js',
      chunkFilename: '[name].chunk.js'
   },
   module: {
      rules: [{
         test: /\.js$/,
         use: ['babel-loader'],
         exclude: '/node_modules/'
      }]
   },
   plugins: [
      new WEBPACK.optimize.CommonsChunkPlugin({
         name: 'common',
         minChunks: 2,
         chunks: ['pageA', 'pageB']
      }),
      new WEBPACK.optimize.CommonsChunkPlugin({
         names: ['vendor', 'manifest'],
         minChunks: Infinity
      })
   ]
};
