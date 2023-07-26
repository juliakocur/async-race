const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const EslintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    assetModuleFilename: 'assets/[name][ext]',
  },
  mode: 'production',
  module: {
    rules: [
        {
            test: /\.[tj]s$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
        {
            test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.(woff(2)?|eot|ttf|otf)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
        // title: 'Demo webpack'
        template: './src/index.html'
    }),
    new CleanWebpackPlugin({ // очистка dist
        cleanStaleWebpackAssets: false 
    }),
    new EslintPlugin({
        extensions: 'ts'
    })
  ],
  devServer: {
    open: true,
    hot: true,
    port: 8080,
  }
};