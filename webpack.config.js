var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './main.js',
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    plugins:[
        new ExtractTextPlugin("styles.css"),
    ],
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_moduless/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test:/\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /.scss?$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
            }
        ]
    }
}