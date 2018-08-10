const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
        loader: 'babel-loader',
        include: [
          path.join(__dirname, 'client'),
          path.join(__dirname, 'engine')
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Stop the Pig'
    }),
    new MiniCssExtractPlugin()
  ]
}
