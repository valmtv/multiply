const path = require('path');
const pkg = require('./package.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const FlowWebpackPlugin = require('flow-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src/'),
      assets: path.resolve(__dirname, 'src/assets/'),
    },
  },
  stats: 'errors-warnings',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'node_modules/omtv-react-input'),
          // include other components that have to be processed by webpack:
          // path.resolve(__dirname, 'node_modules/omtv-react-input'),
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-flow',
            ],
          },
        },
      },
      {
        test: /\.css/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: pkg.name,
      template: path.resolve(__dirname, 'src/index.html'),
    }),
    new CleanWebpackPlugin(['dist']),
    new FaviconsWebpackPlugin('./src/assets/images/favicon.png'),
    new FlowWebpackPlugin(),
    new ESLintPlugin({
      context: path.resolve(__dirname, '.'),
      files: './src',
    }),
  ],
  devServer: {
    contentBase: './dist',
    port: 9000,
  },
}
