import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

// https://vuetifyjs.com/zh-Hans/features/internationalization/#section-5feb901f516595e8
// 由Vuetify（javascript）提供的翻译
import zhHans from 'vuetify/es5/locale/zh-Hans'

export default new Vuetify({
  lang: {
    locales: { zhHans },
    current: 'zhHans'
  }
})
