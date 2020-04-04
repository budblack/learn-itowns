module.exports = {
  publicPath: './',
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.glsl$/,
          loader: 'webpack-glsl'
        }
      ]
    }
  }
};
