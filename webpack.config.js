/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-02-28 21:52:44 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-03-11 17:31:23
 */

//Entry Point && Output Final bundle file- where to put
const path = require('path');
const actualPath = path.join(__dirname, 'public');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

//Module Exports to webpack for bundling
module.exports = env => {
  const isProduction = env === 'production';
  // const CSSExtract = new ExtractTextPlugin('styles.css');
  return {
    entry: './src/app.js',
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
          // use: CSSExtract.extract({
          //   use: ['css-loader', 'sass-loader']
          // }),
          test: /\.s?css$/
        }
      ]
    },
    // plugins: [CSSExtract],
    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
    devServer: {
      contentBase: actualPath,
      historyApiFallback: true
    },
    performance: { hints: false }
  };
};
