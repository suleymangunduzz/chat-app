var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, '/src/index.js'),
  devServer: {
    contentBase: path.resolve(__dirname, './src'),
    historyApiFallback: true,
    open: true
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
      rules: [
        {
            test: /\.s[ac]ss$/i,
            use: [
              "style-loader",
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
  }
};
