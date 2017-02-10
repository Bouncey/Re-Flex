var webpack = require('webpack')
var path = require('path')

module.exports = {

  devtool: 'source-map',

  context: path.join(__dirname, '../..'),

  entry: {
    bundle: [
      'babel-polyfill',
      './src/demo/index.js'
    ]
  },

  output: {
    path: path.join(__dirname, '../../dist/demo'),
    filename: "[name].js"
  },

  plugins: [],

  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },

  module: {

    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader",
          options: {
            presets: ['react', 'es2015', 'stage-0'] // { "modules": false }
          }
        }]
      },
      {
        test: /\.(sass|scss)$/,
        exclude: /node_modules/,
        use: [ "style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
}
