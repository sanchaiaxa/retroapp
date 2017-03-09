import webpack from 'webpack';
// import ExtractTextPlugin from 'extract-text-webpack-plugin';
import {
    resolve,
    join
} from 'path';

export default {
    entry: {
        polyfills: resolve(__dirname, '../src/polyfills.js'),
        vendor: resolve(__dirname, '../src/vendor.js'),
        app: resolve(__dirname, '../src/index.js')
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader?modules',
                    'postcss-loader',
                ]
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
}
