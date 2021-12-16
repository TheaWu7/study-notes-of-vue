/**
 *  原本内容
 */
import { createStore } from "vuex";

export default createStore({
  // 保存状态
  state: {
    counter: 100,
  },
  // 方法
  mutations: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
  },
  actions: {},
  modules: {},
});

/**
 *  自定义
 */
// import Vue from "vue";
// import Vuex from "vuex";

// // 1. 安装
// Vue.use(Vuex);

// // 2. 创建对象
// const store = new Vuex.store({
//   // 保存状态
//   state: {},
//   mutations: {},
//   actions: {},
//   getters: {},
//   modules: {},
// });

// // 3. 导出 store 对象
// export default store;
