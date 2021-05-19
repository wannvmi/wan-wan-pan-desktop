module.exports = {
  title: '',

  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['production', 'development']
   */
  errorLog: ['staging', 'production'],
  // errorLog: ['production', 'development']

  /**
   * @type { string }
   * @description vuex 持久化存储
   */
   vuexKey: 'wan-wan-pan-desktop-vuex'
}
