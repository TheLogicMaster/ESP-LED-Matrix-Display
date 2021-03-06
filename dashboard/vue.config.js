let assetsDir = "assets";
module.exports = {
  publicPath: './',
  configureWebpack: {
    output: {
      filename: 'js/[id].js',
      chunkFilename: 'js/[id].js',
    }
  },
  chainWebpack: config => {
    if (config.plugins.has("extract-css")) {
      const extractCSSPlugin = config.plugin("extract-css");
      extractCSSPlugin &&
      extractCSSPlugin.tap(() => [
        {
          filename: assetsDir + "/[name].css",
          chunkFilename: assetsDir + "/[name].css"
        }
      ]);
    }
  }
};
