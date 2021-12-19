/**
 *  vuex 的 store 状态的唯一更新方式：提交mutation
 */

/**
 *  原本内容
 */
import { createStore } from "vuex";
import getters from "./getters.js";
import mutations from "./mutations.js";
import actions from "./actions.js";
import moduleA from "./modules/moduleA.js";

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
  getters,
  mutations,
  actions,
  modules: {
    a: moduleA,
  },
});
