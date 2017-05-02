let webpack = require('webpack');
let path = require('path');

let BUILD_DIR = path.resolve(__dirname, 'build');
let APP_DIR = path.resolve(__dirname, 'app');

let config = {
  entry: APP_DIR + '/js/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?/,
        include: APP_DIR,
        loaders: ["react-hot-loader", "babel-loader"]
      }
    ],
  }
};

module.exports = config;
