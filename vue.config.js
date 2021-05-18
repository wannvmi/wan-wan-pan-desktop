'use strict'
const webpack = require('webpack')
const packageinfo = require('./package.json')

module.exports = {
  productionSourceMap: false,

  transpileDependencies: ['vuetify'],
  css: {
    // 给 sass-loader 传递选项
    loaderOptions: {
      // @/ 是 src/ 的别名
      // 所以这里假设你有 `src/variables.sass` 这个文件
      // 注意：在 sass-loader v8 中，这个选项名是 "prependData"
      scss: {
        additionalData: "@import '~@/styles/public.scss';"
      }
    }
  },
  configureWebpack: () => {
    if (process.env.NODE_ENV === 'production') {
      // mutate config for production...
    } else {
      // mutate for development...
    }
  },
  chainWebpack: config => {
    // ['vue-modules', 'vue', 'normal-modules', 'normal'].forEach(match => {
    //   config.module
    //     .rule('scss')
    //     .oneOf(match)
    //     .use('sass-loader')
    //     .tap(opt =>
    //       Object.assign(opt, { data: `@import '~@/sass/main.scss';` })
    //     )
    // })

    // vue-cli 4.0 删除打包console.log vue-cli 4.0 删除打包console.log
    // https://cli.vuejs.org/migrating-from-v3/#the-minimizer-method-in-chainwebpack
    config.optimization.minimizer('terser').tap(args => {
      args[0].terserOptions.compress.drop_console = true
      return args
    })

    // packageinfo.version
    config
      .plugin('banner')
      .use(webpack.BannerPlugin, [`pacakge version: ${packageinfo.version}`])
      .end()
  }
}
