module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    alias: {
      laundromate: __dirname + '/web-client'
    }
  },
  entry: './web-client/bootstrap.jsx',
  output: {
    path: __dirname + '/public',
    publicPath: '/public',
    filename: 'bundle.js'
  },
  devServer: {
    host: '0.0.0.0',
    port: 5001
  },
  watchOptions: {
    ignored: /node_modules/
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] }
    ]
  }
};