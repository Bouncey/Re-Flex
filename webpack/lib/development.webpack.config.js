var webpack = require('webpack')
var path = require('path')

module.exports = {

  devtool: 'source-map',

  context: path.join(__dirname, '../..'),

  entry: {
    'index': [
      'babel-polyfill',
      './src/lib/index.js'
    ]
  },

  output: {
    path: path.join(__dirname, '../../dist/lib'),
    library: 'react-reflex',
    filename: '[name].js',
    libraryTarget: 'umd'
  },

  plugins: [

  ],

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
  },

  externals: {
    react: {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react'
    },
    "react-dom": {
      root: 'ReactDOM',
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom'
    }
  }
}

