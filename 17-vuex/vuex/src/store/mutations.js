import { INCREMENT, DECREMENT, ADDCOUNT, ADDSTU, CHANGEINFO } from "./mutation-type.js";

export default {
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
  },
};
