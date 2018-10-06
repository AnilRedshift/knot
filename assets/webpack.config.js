const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function(env) {
  const production = process.env.NODE_ENV === 'production';

  return {
    devtool: production ? 'source-maps' : 'eval',

    entry: './js/app.js',

    output: {
      path: path.resolve(__dirname, '../priv/static/js'),
      filename: 'app.js',
      publicPath: '/',
    },

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
  };
};
