import webpack from 'webpack';
import autoprefixer from 'autoprefixer';
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
                // loader: 'style-loader!css-loader?modules!postcss-loader',
                loaders: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        query: {
                            sourceMap: true,
                            module: true,
                            localIdentName: '[local]___[hash:base64:5]'
                        }
                    },
                    // {
                    //     loader: 'sass-loader',
                    //     query: {
                    //         outputStyle: 'expanded',
                    //         sourceMap: true
                    //     }
                    // },
                    'postcss-loader'
                ],
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [autoprefixer]
            }
        })
    ]
}
