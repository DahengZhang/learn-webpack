const PATH = require('path')

module.exports = {
   entry: {
      app: ['./src/app.ts']
   },
   output: {
      path: PATH.resolve(__dirname, 'dist'),
      filename: '[name].min.js'
   },
   module: {
      rules: [{
         test: /\.ts$/,
         use: ['ts-loader'],
         exclude: '/node_modules/'
      }]
   }
}
