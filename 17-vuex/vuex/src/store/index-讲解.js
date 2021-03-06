/**
 *  vuex 的 store 状态的唯一更新方式：提交mutation
 */

/**
 *  原本内容
 */
import Vue from "vue";
import { createStore } from "vuex";
import { INCREMENT, DECREMENT, ADDCOUNT, ADDSTU, CHANGEINFO } from "./mutation-type.js";

// const moduleB = {
//   state: {},
//   mutations: {},
//   actions: {},
//   getters: {},
// };
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
    info: {
      name: "thea",
      age: 18,
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
  // 方法(only同步)
  /**
   * mutation：
   *  1. 字符串的事件类型(type)
   *  2. 回调函数(handler),其第一个参数就是state
   *  3. mutation携带参数：payload eg.count stu
   */
  mutations: {
    // learing 使用时注释掉这段
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
    // store 的响应式 只在于提前在store中定义好的属性
    changeInfo(state) {
      // 可响应式改变：age 提前定义过
      state.info.age = 20;
      // 不能响应式改变新加的内容
      state.info["address"] = "peking"; //并没有响应式
      // 若想要响应式新增属性：
      Vue.set(state.info, "address", "peking");
      // 删除属性
      delete state.info.age; //不是响应式
      // 响应式删除：
      Vue.delete(state.info, "age");
    },
    updateInfo(state) {
      state.info.age = 21;
    },
    // learning

    // 使用类型常量
    [INCREMENT](state) {
      state.counter++;
    },
    [DECREMENT](state) {
      state.counter--;
    },
    [ADDCOUNT](state, payload) {
      console.log(payload);
      state.counter += payload.count;
    },
    [ADDSTU](state, stu) {
      state.stu.push(stu);
    },
    [CHANGEINFO](state) {
      state.info.age = 20;
      // 增加属性
      Vue.set(state.info, "address", "peking"); //vue3 seems dont work
      // 删除属性
      Vue.delete(state.info, "age"); //vue3 seems dont work
    },
  },
  // 异步方法
  actions: {
    // 第一个参数统一：context
    // 第二个参数：payload
    // acyncUpdateInfo(context, payload) {
    //   setTimeout(() => {
    //     // actions 后 需要加上mutation中定义的方法
    //     context.commit("updateInfo");
    //     console.log(payload);
    //   }, 1000);
    // },
    acyncUpdateInfo(context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // actions 后 需要加上mutation中定义的方法
          context.commit("updateInfo");
          console.log(payload);
          resolve("action中调用resolve");
        }, 1000);
      });
    },
  },
  // 模块化
  modules: {
    a: {
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
    },
    // b: moduleB,
  },
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

// 对象的解构
const obj = {
  name: "thea",
  age: 18,
  addr: "peiking",
};

const { name, age, addr } = obj;
