const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function(env) {
  let output, devtool;
  if (process.env.NODE_ENV === 'production') {
    devtool = 'source-maps';
    output = {
      path: path.resolve(__dirname, '../priv/static/js'),
      filename: 'app.js',
      publicPath: '/',
    };
  } else {
    devtool = 'eval';
    output = {
      path: path.resolve(__dirname, 'public'),
      filename: 'app.js',
      publicPath: 'http://localhost:8080/',
    };
  }
  
  return {
    devtool,
    output,

    entry: './js/app.js',

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },

    plugins: [
      new CopyWebpackPlugin([{
        from: 'static/**/*',
        to: path.resolve(__dirname, '../priv/')
      }])
    ],

    resolve: {
      modules: ['node_modules', path.resolve(__dirname, 'js')],
      extensions: ['.js'],
    },

    devServer: {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
  };
};
