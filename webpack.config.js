const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './frontend/index.jsx',
  output: {
    path: __dirname + '/public',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './frontend/index.html',
      filename: './index.html'
    })
  ]
}
