const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('./webpack.config.js')

const app = express()
const compiler = webpack(webpackConfig)
const port = 8080

app.use(webpackDevMiddleware(compiler));
app.use(webpackHotMiddleware(compiler));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`)
})
