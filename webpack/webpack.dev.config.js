const path = require('path')
const webpack = require('webpack')
const projectRoot = path.join(__dirname, '../')
const assetPath = path.join(projectRoot, 'dist')


module.exports = {
  context: projectRoot,
  entry: './src/index.js',
  output: {
    path: assetPath,
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['', '.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.(json)$/,
        loader: 'json-loader'}
    ]
  }
}
