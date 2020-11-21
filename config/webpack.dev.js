const paths = require('./paths');
const {merge} = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        contentBase: paths.build,
        open: true,
        compress: true,
        hot: true,
        port: 8080
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
})