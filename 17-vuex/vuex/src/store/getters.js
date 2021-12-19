export default {
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
};
