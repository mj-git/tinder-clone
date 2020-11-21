const { merge } = require('webpack-merge');
const webpack = require('webpack');
const paths = require('./paths');
const common = require('./webpack.common');

const port = process.env.PORT || 8080;

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: paths.build,
    open: true,
    compress: true,
    hot: true,
    port,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
