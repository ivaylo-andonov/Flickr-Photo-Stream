const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const app = express();

const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/'
}));

app.use(express.static(__dirname + '/public'));

const server = app.listen(3000, function() {
  console.log('Example app listening at http://localhost:3000');
});