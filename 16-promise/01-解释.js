// 同步 立即得到结果
const n = "thea";
console.log(n);

// 异步 解决网络请求相关问题

// 1.使用 setTimeout
// setTimeout(() => {
//   console.log("hello");
// }, 1000);

// 2.使用promise类
// 创建时传入函数 (resolve,reject)
new Promise((resolve, reject) => {
  // 第一次请求
  setTimeout(() => {
    resolve();
  }, 1000);
}).then(() => {
  // 第一次拿到数据 做处理
  console.log("调用resolve时，会执行.then里面的内容");
  return new Promise((resolve, reject) => {
    // 第二次请求
    setTimeout(() => {
      resolve();
    }, 1000);
  }).then(() => {
    // 第二次处理数据
    console.log("这是.then里面 新建的promise 里面的内容 ");
  });
});

// the same as
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 1000);
}).then(async () => {
  console.log("调用resolve时，会执行.then里面的内容");
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
  console.log("这是.then里面 新建的promise 里面的内容 ");
});
