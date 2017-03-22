const config = {
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
    }, {
      test: /\.jsx$/,
      loader: 'babel',
      exclude: /node_modules/,
    }],
  },
}

export default config
