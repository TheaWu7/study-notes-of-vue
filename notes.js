// ...num: 可变参数 当传入不确定个数的参数时 可用
function sum(...num) {
  console.log(num);
}
sum(1, 2, 3, 4, 5, 5, 6, 2323);

// 给数字保留n位小数
// console.log(num.toFixed(n))

// 编程范式： 命令式编程 / 声明式编程
// 面向对象编程（第一公民：对象） / 函数式编程（第一公民：函数）
// 函数式编程：
// filter / map / reduce
const nums = [10, 20, 222, 111, 444, 40, 50];

let Total = nums
  .filter((n) => n < 100)
  .map((n) => n * 2)
  .reduce((pre, n) => pre + n, 0);
console.log(Total);

/**
 * filter: 遍历数组，将满足条件的数传到新数组中
 */
let newNumF = nums.filter((n) => n < 100);
console.log(newNumF);

// 1.取出所有小于100的数字
const newNum = [];
for (let n of nums) {
  if (n < 100) {
    newNum.push(n);
  }
}
console.log(newNum);

/**
 * map: 遍历数组，对数组中每个元素进行相应操作,结果返回新数组
 */
let doubleM = newNum.map((n) => n * 2);
console.log(doubleM);

// 2. 将所有小于100的数×2
const double = [];
for (let n of newNum) {
  double.push(n * 2);
}
console.log(double);

/**
 * reduce：递归，对内容进行汇总
 */

// 数组 20 30 40
// reduce((previousValue,currentValue) => pre + curr, 0)  // 0:初始化值
// 第一次：pre 0 curr 20
// 第二次：pre 20 curr 30
// 第三次：pre 50 curr 40
// 90

let totalR = double.reduce((pre, n) => pre + n, 0);
console.log(totalR);
// 3.将得到的数字相加 => 最终结果
let total = 0;
for (let n of double) {
  total += n;
}
console.log(total);
