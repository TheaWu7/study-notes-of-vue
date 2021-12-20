import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

// 1. axios 基本使用
axios({
  // 默认get
  url: "http://123.207.32.32:8000/home/multidata",
  // 需要post的时候
  // method: "post",
}).then((res) => {
  console.log(res);
});

// axios.get(url, config);
// axios.post(url, data, config);

axios({
  // url: "http://123.207.32.32:8000/home/data?type=pop&page=1",
  url: "http://123.207.32.32:8000/home/data",
  params: {
    type: "pop",
    page: 1,
  },
}).then((res) => {
  console.log(res);
});

// 2. 并发请求
axios
  .all([
    axios({
      url: "http://123.207.32.32:8000/home/multidata",
    }),
    axios({
      url: "http://123.207.32.32:8000/home/data",
      params: {
        type: "pop",
        page: 1,
      },
    }),
  ])
  // 返回数组
  .then((res) => {
    console.log(res);
    console.log(res[0]);
    console.log(res[1]);
  });
// 用spread两个分开返回
// .then(
//   axios.spread((res1, res2) => {
//     console.log(res1);
//     console.log(res2);
//   })
// );
