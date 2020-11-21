const paths = require('./paths');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');

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
        port: port
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
})