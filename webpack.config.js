var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  mode: 'development',
  entry: [
    './src'
  ],
  devServer: {
    historyApiFallback: true,
    hot: true,
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.tsx']
  },
  module: {
    rules: [{
        test: /\.jsx?$/,
        use: ['babel-loader'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            limit: 10000
          },
        }, ],
      },
    ]
  }
};