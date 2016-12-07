var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(["css", "sass"])
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("../dist/css/app.min.css", {
            allChunks: true
        }),
        new webpack.optimize.UglifyJsPlugin({minimize: true})
    ]
};