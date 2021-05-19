const state = {
  isMaxWindow: false
}

const mutations = {
  SET_IS_MAX_WINDOW: (state, isMaxWindow) => {
    state.isMaxWindow = isMaxWindow
  }
}

const actions = {
  changeIsMaxWindow({ commit }, data) {
    console.log(data)
    commit('SET_IS_MAX_WINDOW', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
