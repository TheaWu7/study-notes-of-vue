export default {
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
};
