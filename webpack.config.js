var webpack = require('webpack');

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/app/app.component.ts'
  },

  resolve: {
    extensions: ['', '.ts', '.js']
  },

  // Config for our build files
  output: {
    path: 'build',
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },

  module: {
    loaders: [
      { test: /\.ts$/, loader: 'awesome-typescript-loader', exclude: [ /\.(spec|e2e)\.ts$/ ] }

    ]
  }
};
