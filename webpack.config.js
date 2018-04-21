/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-02-28 21:52:44 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-04-20 13:49:58
 */

//Entry Point && Output Final bundle file- where to put
const path = require('path');
const actualPath = path.join(__dirname, 'public');
const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Process environment variable
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
if (process.env.NODE_ENV === 'test') {
  require('dotenv').config({ path: '.env.development' });
} else if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({ path: '.env.development' });
}

//Module Exports to webpack for bundling
module.exports = env => {
  const isProduction = env === 'production';
  // const CSSExtract = new ExtractTextPlugin('styles.css');
  return {
    entry: './src/app.js',
    // debug: true,
    output: {
      filename: 'bundle.js',
      path: actualPath
    },
    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: [/node_modules/, /.vscode/]
        },
        {
          use: ['style-loader', 'css-loader', 'sass-loader'],
          // use: [
          //   'style-loader',
          //   {
          //     loader: 'sass-loader',
          //     options: {
          //       sourceMap: true
          //     }
          //   },
          //   {
          //     loader: 'css-loader',
          //     options: {
          //       sourceMap: true
          //     }
          //   }
          // ],
          // use: CSSExtract.extract({
          //   use: ['css-loader', 'sass-loader']
          // }),
          test: /\.s?css$/
        }
      ]
    },
    // plugins: [CSSExtract],
    plugins: [
      new webpack.DefinePlugin({
        'process.env.FIREBASE_APIKEY': JSON.stringify(
          process.env.FIREBASE_APIKEY
        ),
        'process.env.FIREBASE_AUTHDOMAIN': JSON.stringify(
          process.env.FIREBASE_AUTHDOMAIN
        ),
        'process.env.FIREBASE_DATABASEURL': JSON.stringify(
          process.env.FIREBASE_DATABASEURL
        ),
        'process.env.FIREBASE_PROJECTID': JSON.stringify(
          process.env.FIREBASE_PROJECTID
        ),
        'process.env.FIREBASE_STORAGEBUCKET': JSON.stringify(
          process.env.FIREBASE_STORAGEBUCKET
        ),
        'process.env.FIREBASE_MESSAGINGSENDERID': JSON.stringify(
          process.env.FIREBASE_MESSAGINGSENDERID
        )
      })
    ],
    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
    // devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: actualPath,
      historyApiFallback: true
      // publicPath: '/dist/'
    },
    performance: { hints: false }
  };
};
