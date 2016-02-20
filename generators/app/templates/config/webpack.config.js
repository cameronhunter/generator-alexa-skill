var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, '..', 'src', 'index.js'),
  target: 'node',
  output: {
    libraryTarget: 'commonjs',
    library: 'handler',
    filename: 'index.js',
    path: path.join(__dirname, '..', 'build')
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      'fetch': 'isomorphic-fetch',
      'global.Promise': 'bluebird',
      'Promise': 'bluebird',
      'Object.entries': 'object.entries',
      'Object.values': 'object-values'
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(true)
  ]
};
