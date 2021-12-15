// 有异步操作时 用promise进行封装
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("halo");
  }, 1000);
  setTimeout(() => {
    reject("error msg");
  }, 1000);
})
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// the same as
new Promise((resolve, reject) => {
  resolve("halo");
  reject("error msg");
}).then(
  (data) => {
    console.log(data);
  },
  (err) => {
    console.log(err);
  }
);
