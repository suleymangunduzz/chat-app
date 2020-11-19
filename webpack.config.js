const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: path.resolve(__dirname, '/src/index.js'),
  devServer: {
    contentBase: path.resolve(__dirname, './build'),
    historyApiFallback: true,
    open: true
  },
  output: {
    path: path.resolve(__dirname, 'build/'),
    filename: 'bundle.[chunkhash:8].js'
  },
  module: {
      rules: [
        {
            test: /\.s[ac]ss$/i,
            use: [
              devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
              "css-loader",
              {
                loader: "sass-loader",
                options: {
                  implementation: require("sass"),
                },
              },
            ]
        },
        {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader'
            }
          }
      ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html'}),
    ...(devMode ? [] : [new MiniCssExtractPlugin()])
  ]
};
