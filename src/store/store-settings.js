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
};

const actions = {
  set12timeformat({ commit }, value) {
    commit("set12timeformat", value);
  },
  settaskinList({ commit }, value) {
    commit("settaskinList", value);
  },
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
