export default {
  state: {
    name: "modulaA中的name",
  },
  getters: {
    fulName(state) {
      return state.name + "+getter";
    },
    fulName2(state, getters) {
      return getters.fulName + "++getters";
    },
    fulName3(state, getters, rootState) {
      return getters.fulName2 + rootState.counter;
    },
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload;
    },
  },
  actions: {
    aUpdateName(context) {
      setTimeout(() => {
        // 这里的commit 只能调用模块内部的
        context.commit("updateName", "actions里的name");
      }, 1000);
    },
  },
};
