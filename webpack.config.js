var Path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var Webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var isProduction = process.env.NODE_ENV === 'production';
var cssOutputPath = isProduction ? '/styles/app.[hash].css' : '/styles/app.css';
var jsOutputPath = isProduction ? '/scripts/app.[hash].js' : '/scripts/app.js';
var ExtractSASS = new ExtractTextPlugin(cssOutputPath);
var port = isProduction ? process.env.PORT || 8080 : process.env.PORT || 3000;

// Non boilerplate code - working directory
const projectRoot = process.cwd();

// ------------------------------------------
// Base
// ------------------------------------------
var webpackConfig = {
  resolve: {
    extensions: ['', '.js', '.jsx'],
    // Non boilerplate code - directory aliases
    alias: {
      appRoot: `${projectRoot}/src/app`,
      appCommon: `${projectRoot}/src/app/_common`,
      appComponents: `${projectRoot}/src/app/components`,
      appContainers: `${projectRoot}/src/app/containers`,
      appActions: `${projectRoot}/src/app/actions`,
      appReducers: `${projectRoot}/src/app/reducers`,
      ActionTypes: `${projectRoot}/src/app/actionTypes`,
    },
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(isProduction ? 'production' : 'development'),
      },
    }),
    new HtmlWebpackPlugin({
      template: Path.join(__dirname, './src/index.html'),
    }),
  ],
  module: {
    loaders: [{
      test: /.jsx?$/,
      include: Path.join(__dirname, './src/app'),
      loader: 'babel',
    }],
  },
};

// ------------------------------------------
// Entry points
// ------------------------------------------
webpackConfig.entry = !isProduction
  ? ['webpack-dev-server/client?http://localhost:' + port,
     'webpack/hot/dev-server',
     Path.join(__dirname, './src/app/index')]
  : [Path.join(__dirname, './src/app/index')];

// ------------------------------------------
// Bundle output
// ------------------------------------------
webpackConfig.output = {
  path: Path.join(__dirname, './dist'),
  filename: jsOutputPath,
};

// ------------------------------------------
// Devtool
// ------------------------------------------
webpackConfig.devtool = isProduction ? 'source-map' : 'cheap-eval-source-map';

// ------------------------------------------
// Module
// ------------------------------------------
isProduction
  ? webpackConfig.module.loaders.push({
      test: /\.scss$/,
      loader: ExtractSASS.extract(['css', 'sass']),
    })
  : webpackConfig.module.loaders.push({
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass'],
    });

// ------------------------------------------
// Plugins
// ------------------------------------------
isProduction
  ? webpackConfig.plugins.push(
      new Webpack.optimize.OccurenceOrderPlugin(),
      new Webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false,
        },
      }),
      ExtractSASS
    )
  : webpackConfig.plugins.push(
      new Webpack.HotModuleReplacementPlugin()
    );

// ------------------------------------------
// Development server
// ------------------------------------------
if (!isProduction) {
  webpackConfig.devServer = {
    contentBase: Path.join(__dirname, './'),
    hot: true,
    port: port,
    inline: true,
    progress: true,
    historyApiFallback: true,
  };
}

module.exports = webpackConfig;
