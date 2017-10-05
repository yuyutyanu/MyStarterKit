const path = require("path")
const webpack = require('webpack')

module.exports = {
  entry: {
    bundle: [
      path.resolve('./public/src/js/index.js'),
      path.resolve('./public/src/js/sample.js')
    ]
  },
  output: {
    path: path.resolve("./dist/views/js"),
    filename: '[name].js',
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ],
  }
}