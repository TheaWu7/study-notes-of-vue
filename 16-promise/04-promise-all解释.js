// 当需求本身依赖多个请求时

// 伪代码
// 请求一
// 2.定义调用函数的方法
let isRes1 = false;
let isRes2 = false;
$.ajax({
  url: "",
  success: function () {
    console.log("res1");
    isRes1 = true;
    // 3.调用函数
    handleResult();
  },
});
// 请求二
$.ajax({
  url: "",
  success: function () {
    console.log("res2");
    isRes2 = true;
    // 3.调用函数
    handleResult();
  },
});

// 1.不能判断哪个请求先完成时 定义的函数
function handleResult() {
  if (isRes1 && isRes2) {
    // 当两个请求都完成之后 执行函数内相应操作
  }
}
