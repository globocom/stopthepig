const HtmlWebpackPlugin = require('html-webpack-plugin')

const {
  NODE_ENV = 'development'
} = process.env

module.exports = {
  mode: NODE_ENV,
  entry: './client/app',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}
