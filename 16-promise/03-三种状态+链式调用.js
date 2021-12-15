/**
 *  三种状态
 *
 *  padding: 等待状态，eg：正在进行网络请求 or 定时器没到时间
 *  fulfill：满足状态：当主动回调了resolve时 就会处于此状态，并且会回调.then()
 *  reject: 拒绝状态：当主动回调了reject时 处于此状态，并回调.catch()
 */

/**
 *  链式调用
 *  (需求：请求到的数据：aaa，处理1：aaa111，处理2：aaa111222)
 */

// error ↓
// new Promise((resolve, reject) => {
//   resolve("aaa");
// })
//   .then((data) => {
//     const data2 = `${data}111`;
//     console.log(data2);
//     resolve(data2);
//   })
//   .then((data2) => {
//     const data3 = `${data2}222`;
//     console.log(data3);
//   });

// right ↓
new Promise((resolve, reject) => {
  resolve("aaa");
}).then((res) => {
  // 1.第一次获取数据
  console.log("请求到的数据：", res);

  // 对结果进行第一次处理
  return new Promise((resolve) => {
    resolve(res + "111");
  }).then((res) => {
    // 2. 第二次获取数据
    console.log(`处理1：${res}`);

    // 对结果进行第二次处理
    return new Promise((resolve) => {
      resolve(res + "222");
    }).then((res) => {
      // 3.第三次获取数据
      console.log(`处理2：${res}`);
    });
  });
});

// the same as
new Promise((resolve, reject) => {
  resolve("aaa");
})
  .then((res) => {
    // 1.第一次获取数据
    console.log("请求到的数据：", res);

    // 对结果进行第一次处理
    return Promise.resolve(res + "111");
  })
  .then((res) => {
    // 2. 第二次获取数据
    console.log(`处理1：${res}`);

    // 对结果进行第二次处理
    return Promise.resolve(res + "222");
  })
  .then((res) => {
    // 3.第三次获取数据
    console.log(`处理2：${res}`);
  });

// the same as
new Promise((resolve, reject) => {
  resolve("aaa");
})
  .then((res) => {
    console.log("请求到的数据：", res);
    return res + "111";
  })
  .then((res) => {
    console.log(`处理1：${res}`);
    return res + "222";
  })
  .then((res) => {
    console.log(`处理2：${res}`);
  });

/**
 *  当有异常时
 */
new Promise((resolve, reject) => {
  resolve("aaa");
})
  .then((res) => {
    console.log("请求到的数据：", res);
    return Promise.resolve(res + "111");
  })
  .then((res) => {
    console.log(`处理1：${res}`);
    // return Promise.resolve(res + "222");
    return Promise.reject("error msg");
    // or
    // throw "error msg";
  })
  .then((res) => {
    console.log(`处理2：${res}`);
  })
  .catch((err) => {
    console.log(err);
  });
