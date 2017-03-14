import webpack from 'webpack';
import webpackMerge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {
    resolve,
    join
} from 'path';

import webpackCommon from './webpack.common';

export default webpackMerge(webpackCommon, {
    output: {
        filename: '[name].js',
        chunkFilename: '[id].chunk.js',
        path: resolve(__dirname, '../dist'),
        publicPath: '/'
    },
    context: resolve(__dirname, '../src'),
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        host: '0.0.0.0',
        port: 3000,
        inline: false,
        hot: true,
        contentBase: resolve(__dirname, '../src'),
        publicPath: '/',
        historyApiFallback: true,
        // proxy: {
        //     '/api/*': {
        //         target: 'http://127.0.0.1:9000'
        //     }
        // }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, '../src/index.html'),
        }),
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         NODE_ENV: 'develop',
        //     },
        // })
    ]
});
