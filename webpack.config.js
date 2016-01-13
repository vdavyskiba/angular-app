var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin  = require('html-webpack-plugin');
//var CopyWebpackPlugin  = require('copy-webpack-plugin');

module.exports = {
  entry: {
    'app': './src/bootstrap.ts',
    'vendor': './src/vendor.ts'
  },
  output: {
    path: "./dist",
    filename: "bundle.js"
  },
  plugins: [

    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),

    // generating html
    new HtmlWebpackPlugin({ template: 'src/index.html', inject: false })

    //todo: commented out for debug mode only
    /*new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: false
      }
    })*/
  ],

  resolve: {
    extensions: ['', '.ts', '.js', '.json']
  },

  module: {
    loaders: [

      { test: /\.ts$/, loader: 'ts-loader' },

      { test: /\.json$/,  loader: 'json-loader' },

      { test: /\.css$/,   loader: 'raw-loader' },

      { test: /\.html$/,  loader: 'raw-loader' }
    ],
    noParse: [ path.join(__dirname, 'node_modules', 'angular2', 'bundles') ]
  },

  devtool: "#inline-source-map",//todo: for debug mode only

  devServer: {
    historyApiFallback: true
  }
};
