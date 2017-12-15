const merge = require('webpack-merge');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const baseConfig = require('./webpack.base');

module.exports = merge(baseConfig, {
  plugins: [
    new UglifyJSPlugin()
  ]
});
