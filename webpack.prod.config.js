const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
    entry: {
        main: "./src/base.js"
    },
    target: 'web',
    devtool: "#source-map",
    mode: "production",
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: false // set to true if you want JS source maps
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: { presets: ["@babel/env"] }
            },
            {
                // Loads the javacript into html template provided.
                // Entry point is set below in HtmlWebPackPlugin in Plugins
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                // Loads images into CSS and Javascript files
                test: /\.jpg$/,
                use: [{loader: "url-loader"}]
            },
            {
                // Loads CSS into a file when you import it via Javascript
                // Rules are set in MiniCssExtractPlugin
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '/./[path][name].[ext]',
                },
            },
        ]
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/./",
        filename: "bundle.js"
    },
    plugins: [
        //new webpack.HotModuleReplacementPlugin(),
        new HtmlWebPackPlugin({
            template: "./public/base.html",
            filename: "./base.html"
        }),
        new MiniCssExtractPlugin({
            filename: "bundle.css",
            chunkFilename: "id.css"
        }),
    ],

};