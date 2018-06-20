const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:{
        main: path.resolve(__dirname, 'src/index.jsx'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.[chunkhash].js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            components: path.resolve(__dirname, 'src/Components/'),
            containers: path.resolve(__dirname, 'src/Containers/'),
            info: path.resolve(__dirname, 'src/Info/'),
        }
    },
    module:{
        rules:[
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader"
                }
            },
            {
                test: /\.s?css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "postcss-loader", "sass-loader"]
                })
            }
        ],

    },
    plugins:[
        new ExtractTextPlugin({
            filename: 'main.[chunkhash].css',
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: 'index.html'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 8080,
        historyApiFallback: true,
    }
};