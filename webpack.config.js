var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/application.js',
  output: {
    path: path.join(__dirname, 'public'),
    sourceMapFilename: 'main.map',
    filename: 'main.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel']
      },
      {
        include: /\.json$/,
        loaders: ["json-loader"]
      }
    ]
  }
};
