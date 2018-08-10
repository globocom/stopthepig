const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const {
  NODE_ENV = 'development'
} = process.env

module.exports = {
  mode: NODE_ENV,
  entry: [
    './unity/TemplateData/UnityProgress.js',
    './unity/Build/UnityLoader.js',
    './client/app'
  ],
  output: {
    path: path.join(__dirname, 'docs')
  },
  externals: {
    'unity-loader': 'UnityLoader',
    'unity-progress': 'UnityProgress'
  },
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
      },
      {
        type: 'javascript/auto',
        test: /test_communication\.json$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Stop the Pig'
    }),
    new MiniCssExtractPlugin(),
    new CopyWebpackPlugin(
      [
        { from: 'unity/Build/test_communication.wasm.code.unityweb', to: path.join(__dirname, 'docs', 'test_communication.wasm.code.unityweb') },
        { from: 'unity/Build/test_communication.data.unityweb', to: path.join(__dirname, 'docs', 'test_communication.data.unityweb') },
        { from: 'unity/Build/test_communication.wasm.framework.unityweb', to: path.join(__dirname, 'docs', 'test_communication.wasm.framework.unityweb') }
      ]
    )
  ]
}
