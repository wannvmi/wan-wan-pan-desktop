const state = {
  isMaxWindow: false,
  theme: 'light' // light dark system
}

const mutations = {
  SET_IS_MAX_WINDOW: (state, isMaxWindow) => {
    state.isMaxWindow = isMaxWindow
  },
  SET_THEME: (state, theme) => {
    state.theme = theme
  }
}

const actions = {
  changeIsMaxWindow({ commit }, data) {
    commit('SET_IS_MAX_WINDOW', data)
  },
  setTheme({ commit }, data) {
    if (data === 'light') {
      this.$vuetify.theme.dark = false
    } else {
      this.$vuetify.theme.dark = true
    }

    commit('SET_THEME', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
