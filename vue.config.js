const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/',

  configureWebpack: {

    performance: {
      hints: false,
      maxEntrypointSize: 500000000,
      maxAssetSize: 300000000,
    },
  }
})