const PATH = require('path')

module.exports = {
   entry: {
      app: ['babel-polyfill', './src/app.js']
   },
   output: {
      path: PATH.resolve(__dirname, 'dist'),
      filename: '[name].min.js'
   },
   module: {
      rules: [{
         test: /\.js$/,
         use: ['babel-loader'],
         exclude: '/node_modules/'
      }]
   }
};
