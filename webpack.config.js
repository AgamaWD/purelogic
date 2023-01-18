const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CSSMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
const filename = ext => isDev ? `${ext}/[name].${ext}` : `${ext}/[name].[hash].${ext}`;

const optimization = () => {
    const config = { 

    }

    if(isProd) {
        config.minimizer = [
            new CSSMinimizerWebpackPlugin(),
            new TerserWebpackPlugin()
        ]
    }

    return config;
};

const cssLoaders = extra => {
    const loaders = [
        {
            loader: MiniCssExtractPlugin.loader,
        }, 
        "css-loader"
    ]

    if(extra) {
        loaders.push(extra)
    }

    return loaders
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: ['@babel/polyfill', './js/app.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: filename('js'),
        clean: true,
    },
    optimization: optimization(),
    devServer: {
        port: 8800,
        hot: isDev
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            minify: {
                collapseWhitespace: isProd
            }
        }),

        new MiniCssExtractPlugin({
            filename: filename('css'),
        }),

        new CopyWebpackPlugin({
            patterns: [
            { 
                from: 'assets/images', 
                to: './assets/images'
            },
          ]}),
    ],
    module: {
        rules: [
            {
                test: /\.(png|jpeg|jpg|gif|svg)$/,
                type: 'asset/resource',
                generator: {
                    filename: '[path][name].[ext]',
                }
            },
            {
                test: /\.(ttf|woff|woff2)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/roboto/[name][ext]',
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: cssLoaders('sass-loader')
            },
            {
                test: /\.css$/i,
                use: cssLoaders()
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.html$/,
                use: [
                    'raw-loader'
                ]
            }
    
        ]
    }
};