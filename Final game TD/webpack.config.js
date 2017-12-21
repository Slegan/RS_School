var webpack = require('webpack');

const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
      app: './src/index.js',
      bootstrap: './src/javascripts/bootstrap.js',
    },
    output: {
      filename: '[name].bundle.js',
      chunkFilename: '[name].chunk.js',
      path: path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map',
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      hot: true,
      port: 9000
    },
    module: {
      rules: [
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {name: '[name].[ext]', outputPath: 'images/'}
          }
        ]
      },
      {
        test: /\.(eot|svg|otf|ttf|woff|woff2)$/,
        use: [{
          loader: 'file-loader',
          options: {name: '[name].[ext]',  outputPath: 'fonts/'}
        }]
      }
      ]
    },
    plugins: [
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new CleanWebpackPlugin(['dist']),
      new webpack.optimize.CommonsChunkPlugin({name: 'common'}),
      new HtmlWebpackPlugin({
        title: 'TD_game',
        favicon: './src/images/favicon.png',
        template: path.resolve(__dirname, 'index.html')
      }),
      new ExtractTextPlugin("styles.css"),
    ]
  };
