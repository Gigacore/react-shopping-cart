const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['./index.js', './styles/main.scss'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.scss/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ["react", "stage-0"],
          plugins: ["transform-class-properties", "transform-decorators-legacy"]
        }
      }
    ]
  },
  devServer: {
    contentBase: './'
  },
  plugins: [
    new ExtractTextPlugin("bundle.css")
  ]
}