const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
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
