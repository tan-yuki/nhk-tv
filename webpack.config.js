// @see https://webpack.github.io/docs/configuration.html
// @see https://github.com/AngularClass/angular2-webpack-starter/blob/master/webpack.config.js

var path = require('path');
var webpack = require('webpack');

/**
 * Webpack configuration
 *
 * See: http://webpack.github.io/docs/configuration.html#cli
 */
module.exports = {

  debug: true,

  entry: {
    'main': './src/main.ts'
  },

  resolve: {
    extensions: ['', '.ts', '.js']
  },

  output: {
    path: './dist',
    filename: '[name].bundle.js'
  },

  module: {

    preLoaders: [
      {test: /\.js$/, loader: 'source-map-loader', exclude: [root('node_modules/rxjs')]}
    ],

    loaders: [
      {
        test: /\.ts$/,
        loaders: [
          'babel-loader',
          'ts-loader'
        ],
        exclude: [
          /\.(spec|e2e|async)\.ts$/
        ]
      }
    ]

  }
};

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}
