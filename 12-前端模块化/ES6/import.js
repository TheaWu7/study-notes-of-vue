// 1.导入 export{} 中 定义的变量
import { flag } from "./export.js";
if (flag) {
  console.log("testtest1212");
}

// 2.直接导入 export 定义的变量
import { num1 } from "./export.js";
console.log(num1);

// 3.导入 export 定义的 function/class
import { mul, Person } from "./export.js";
console.log(mul(2, 3));

const p = new Person();
p.run();

// 4.导入 export default 的内容, 这里的thea是使用者自己起的,随便起的 => export里默认的
import thea from "./export.js";
console.log(thea); //打印导入的变量

// 调用导入的函数
thea("hello");

// 5.导入所有内容
import * as wuhu from "./export.js";
console.log(wuhu.name);
