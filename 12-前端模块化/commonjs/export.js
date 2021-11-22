const name = "thea";
const age = 21;
function sum(num1, num2) {
  return num1 + num2;
}

const flag = true;
if (flag) {
  console.log(sum(10, 20));
}

// 导出
module.exports = {
  flag: flag,
  sum: sum,
};
