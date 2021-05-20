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
  },
  theme: {
    dark: false,
    options: { customProperties: true },
    themes: {
      light: {
        primary: '#1976D2',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
      },
      dark: {}
    }
  }
})
