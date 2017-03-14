import webpack from 'webpack';
import webpackMerge from 'webpack-merge';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import { resolve } from 'path';

import commonConfig from './webpack.common';


export default webpackMerge(commonConfig, {
    devtool: 'source-map',

    output: {
        path: resolve(__dirname, '..dist'),
        publicPath: '/',
        filename: '[name].[hash].js',
        chunkFilename: '[id].[hash].chunk.js'
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: {
                keep_fnames: true
            }
        }),
        new ExtractTextPlugin('[name].[hash].css'),
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         'ENV': JSON.stringify(ENV)
        //     }
        // }),
        new webpack.LoaderOptionsPlugin({
            htmlLoader: {
                minimize: false
            }
        })
    ]
});