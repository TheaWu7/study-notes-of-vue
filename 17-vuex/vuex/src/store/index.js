/**
 *  vuex 的 store 状态的唯一更新方式：提交mutation
 */

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
  /**
   * mutation：
   *  1. 字符串的事件类型(type)
   *  2. 回调函数(handler),其第一个参数就是state
   *  3. mutation携带参数：payload eg.count stu
   */
  mutations: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    // 1. 普通风格的mutation
    // addCount(state, count) {
    //   state.counter += count;
    // },
    // 2. 带type的提交
    addCount(state, payload) {
      // 这里的payload是使用时传递的参数，是整个对象
      console.log(payload);
      state.counter += payload.count;
    },
    addStu(state, stu) {
      state.stu.push(stu);
    },
  },
  // getters
  getters: {
    moreSep(state) {
      return state.stu.filter((s) => s.age > 900);
    },
    // 方法的第二个参数：getters --> 对getter中定义的方法再加工
    moreSepLength(state, getters) {
      //获取 sep 之后的个数
      return getters.moreSep.length;
    },
    // 接受调用时的传参
    gtAge(state) {
      // 返回一个函数
      // return function (iage) {
      //   return state.stu.filter((s) => s.age > iage);
      // };
      return (iage) => state.stu.filter((s) => s.age > iage);
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
