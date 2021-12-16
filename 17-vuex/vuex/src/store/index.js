/**
 *  原本内容
 */
import { createStore } from "vuex";

export default createStore({
  // 保存状态
  state: {
    counter: 100,
    stu: [
      { id: 101, name: "thea", age: 411 },
      { id: 102, name: "mo", age: 923 },
      { id: 103, name: "yu", age: 307 },
      { id: 104, name: "yue", age: 1212 },
    ],
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
  // getters
  getters: {
    moreSep(state) {
      return state.stu.filter((s) => s.age > 900);
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

/**
 *  vuex核心概念
 *
 * 1.state 储存状态相关信息的
 *  -单一状态树 single source of truth：只使用一个store对象
 */
