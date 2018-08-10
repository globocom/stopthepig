const path = require('path')
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
        loader: 'babel-loader',
        include: [
          path.join(__dirname, 'client'),
          path.join(__dirname, 'engine')
        ],
        exclude: [
          path.join(__dirname, 'engine/algorithms')
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader/url' },
          { loader: 'file-loader' }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Stop the Pig'
    })
  ]
}
