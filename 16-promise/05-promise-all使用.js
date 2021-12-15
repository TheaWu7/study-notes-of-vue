// Promise.all() | all：可迭代对象 iterator
// Promise.all([
//   new Promise((resolve, reject) => {
//     $.ajax({
//       url: "url1",
//       success: function (data) {
//         console.log(data);
//       },
//     });
//   }),
//   new Promise((resolve, reject) => {
//     $.ajax({
//       url: "url1",
//       success: function (data) {
//         console.log(data);
//       },
//     });
//   }),
// ]).then((result) => {
//   // result[0] => 第一个请求的结果
//   // result[1] => 第二个请求的结果
// });

// 用setTimeout模拟网络请求
Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("res1");
    }, 1000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ res: "res2", time: 2 });
    }, 2000);
  }),
]).then((result) => {
  console.log(result);
});
