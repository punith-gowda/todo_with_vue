import { LocalStorage } from 'quasar'

const state = {
  settings: {
    show12hrformat: false,
    showtaskinList: false,
  },
};

const mutations = {
  set12timeformat(state, value) {
    state.settings.show12hrformat = value;
  },
  settaskinList(state, value) {
    state.settings.showtaskinList = value;
  },
  setSettings(state, settings) {
    Object.assign(state.settings, settings);
  }
};

const actions = {
  set12timeformat({ commit, dispatch }, value) {
    commit("set12timeformat", value);
    dispatch('saveSettings')

  },
  settaskinList({ commit, dispatch }, value) {
    commit("settaskinList", value);
    dispatch('saveSettings')
  },
  saveSettings({ state }) {
    LocalStorage.set("settings", state.settings);
  },
  getSettings({ commit }) {
    let settings = LocalStorage.getItem("settings")
    if (settings) {
      commit('setSettings', settings)
    }
  }
};

const getters = {
  settings: (state) => {
    return state.settings;
  },
};

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state,
};
