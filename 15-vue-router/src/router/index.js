// 配置路由相关信息
import Vue from "vue";
import VueRouter from "vue-router";
import Thea from "../components/Thea.vue";
import Momo from "../components/Momo.vue";
import yu from "../components/yu.vue";

// 1.通过 Vue.use(插件),安装插件
Vue.use(VueRouter);

// 2.创建 VueRouter 对象
// 2.1 配置映射关系 一个映射关系 => 一个对象
const routes = [
  {
    // 路由默认路径 重定向
    path: "",
    redirect: "/thea",
  },
  {
    path: "/thea",
    component: Thea,
  },
  {
    path: "/momo",
    component: Momo,
  },
  {
    path: "/yu",
    component: yu,
  },
];

const router = new VueRouter({
  routes,
  // 不写默认哈希（8080/#/xxx）
  mode: "history",
  // 统一更改active(如果在标签内由设置，就以标签内的为主)
  linkActiveClass: "yuyu",
});

// 3.将 router 对象传入到 Vue 实例中
export default router;
