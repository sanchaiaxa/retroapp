import webpack from 'webpack';
import webpackMerge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {
    resolve,
    join
} from 'path';

import webpackCommon from './webpack.common';

export default webpackMerge(webpackCommon, {
    entry: [
        'react-hot-loader/patch',
        // activate HMR for React

        'webpack-dev-server/client',
        // bundle the client for webpack-dev-server
        // and connect to the provided endpoint

        'webpack/hot/only-dev-server',

        './index.js'
    ],
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
        inline: true,
        hot: true,
        contentBase: resolve(__dirname, '../src'),
        publicPath: '/',
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, '../src/index.html'),
            path: resolve(__dirname, '../src'),
            filename: 'index.html'
        }),
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         NODE_ENV: 'develop',
        //     },
        // })
    ]
});
