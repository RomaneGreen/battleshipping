const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: './src/index.js',

  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },

  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Custom template',
    
    template: './src/index.html'
    })
  ]
};