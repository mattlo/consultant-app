const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');

const PATHS = {
  app: path.join(__dirname, 'client'),
  build: path.join(__dirname, 'assets')
};

const TARGET = process.env.npm_lifecycle_event;

process.env.BABEL_ENV = TARGET;

const common = {
  entry: [
    // main bundle
    `${PATHS.app}/entry.js`
  ],
  output: {
    path: PATHS.build,
    filename: 'bundle.js',
    publicPath: 'http://localhost:8002/assets/'
  },
  plugins: [
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
    new webpack.DefinePlugin({
      'process.env.RC': true,
      'process.env.PROD': process.env.PROD
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel?cacheDirectory'],
        include: [
          PATHS.app
        ]
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        // Include accepts either a path or an array of paths.
        include: PATHS.app
      },
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css?sourceMap',
          'sass?sourceMap'
        ]
      }
    ]
  }
};

if (TARGET === 'build' || !TARGET) {
  module.exports = merge(common, {});
}

if (TARGET === 'webpack-start') {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:8000',
        'Access-Control-Allow-Credentials': true
      },
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      // Display only errors to reduce the amount of output.
      stats: 'errors-only',
      // Parse host and port from env so this is easy to customize.
      host: process.env.HOST,
      port: process.env.PORT
    }, plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}
