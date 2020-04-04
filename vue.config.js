module.exports = {
  publicPath: './',
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
