const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? '/allen84717.github.io/'
    : '/',

  configureWebpack: {

    performance: {
      hints: false,
      maxEntrypointSize: 500000000,
      maxAssetSize: 300000000,
    },
  }
})