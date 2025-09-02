const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    mode: 'development',

    entry: {
        main: path.resolve('./app.js')
    },

    output: {
        filename: '[name].js',
        path: path.resolve('./dist')
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    path.resolve('./myLoader.js')
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 20 * 1024
                    }
                }
            },
        ]
    },

    plugins: [
        new webpack.BannerPlugin(
            {
                banner: '마지막 빌드 시간: ' + new Date().toLocaleString()
            }
        ),
        new CleanWebpackPlugin()
    ]
}