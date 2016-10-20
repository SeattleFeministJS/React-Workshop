const path = require('path')
const webpack = require('webpack')
const projectRoot = path.join(__dirname)
const assetPath = path.join(projectRoot, 'dist')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

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
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
      }
    ]
  },
  postcss: function(webpack){
    return [
      require('postcss-url'),
      require('postcss-import')({
        addDependencyTo: webpack
      }),
      require('precss')(),
      require('postcss-calc')({
        mediaQueries: true
      }),
      require('postcss-cssnext')(),
      require('postcss-hexrgba')(),
      require('postcss-functions')({
        glob: path.join(__dirname, 'src', 'lib', '*.js')
      }),
      require('postcss-browser-reporter')()
    ]
  },
  plugins: [
    new ExtractTextPlugin('./styles.css')
  ]
}
