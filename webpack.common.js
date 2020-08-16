const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/js/index.js'
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(svg|png|jpe?g|gif)$/i,
                use: {
                    loader: "file-loader",
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: "imgs"
                    }
                }
            }
        ]
    }
}