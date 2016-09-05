var path = require('path');
var webpack = require('webpack');

// console.log('__dirname', path.join(__dirname, '/src/script/index.js'));
module.exports = {
  //  resolve: {
  //       alias: {
  //           jquery: "jquery/src/jquery"
  //       }
  // },  
  // or devtool: 'eval' to debug issues with compiled output:
  // resolve: {
  //       alias: {
  //           jquery: "./src/script/jquery/myscript"
  //       }
  // },

  devtool: 'cheap-module-eval-source-map',
  entry: [
    // necessary for hot reloading with IE:
    'eventsource-polyfill',
    // listen to code updates emitted by hot middleware:
    'webpack-hot-middleware/client',

    // your code:
    './src/js/index',
     path.join(__dirname, './src/script/index.js')

  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    // new webpack.ProvidePlugin({
    //         $: "jquery",
    //         jQuery: "jquery"
    // })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src/js')
    }]
  }
};
