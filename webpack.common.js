var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require("html-webpack-plugin");
var dotenv = require("dotenv");
dotenv.config();

console.log(process.env);

module.exports = {
    target: ["web"],
    entry: './src/index',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js',
        clean: true
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [{
            test: /\.(ts|js)x?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "netflix-clone",
            template: path.resolve(__dirname, "public") + "/index.html"
        }),
        new webpack.DefinePlugin({
            "process.env": JSON.stringify(process.env)
        })
    ]
};