const { resolve } = require('path');
const htmlPlugin = require('html-webpack-plugin');
const miniCssPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './js/main.js',
    output: {
        filename: 'app.[contenthash].js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules:[
            {
                test: /\.(png|jpeg|gif|mp3)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            },
            {
                test: /\.css/i,
                use: ['style-loader', 'css-loader']
            },
        ]
    },
    plugins: [
        new miniCssPlugin({
            filename: '[name].[contenthash].css'
        }),
        new htmlPlugin({
            template: resolve(__dirname, 'index.html')
        })
    ]
}