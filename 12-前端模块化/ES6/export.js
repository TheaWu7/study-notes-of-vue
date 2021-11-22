const name = "thea";
const age = 21;
const flag = true;

function sum(num1, num2) {
  return num1 + num2;
}
if (flag) {
  console.log(sum(10, 2));
}
// 方式一： 定义好之后一起导出
export { flag, sum, name, age };

// 方式二
export var num1 = 1000;

// 导出函数/类
export function mul(n1, n2) {
  return n1 * n2;
}

export class Person {
  run() {
    console.log("is running");
  }
}

// export default 让使用者自己命名，一个文件里只能有一个 ... default
const address = "北京市";
// export default address; //导出变量

// 导出函数
export default function (arg) {
  console.log(arg);
}
