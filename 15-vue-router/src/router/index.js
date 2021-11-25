// 配置路由相关信息
import Vue from "vue";
import VueRouter from "vue-router";

// import Thea from "../components/Thea.vue";
// import Momo from "../components/Momo.vue";
// import yu from "../components/yu.vue";
// import user from "../components/user.vue";

// 路由懒加载 => 打包出来 一个route 对应 一个js文件
const Thea = () => import("../components/Thea.vue");
const TheaNews = () => import("../components/TheaNews.vue");
const TheaMsg = () => import("../components/TheaMsg.vue");

const Momo = () => import("../components/Momo.vue");
const yu = () => import("../components/yu.vue");
// const user = () => import("../components/user.vue");
// 也可以直接放在配置里 like line42

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
    children: [
      {
        path: "",
        redirect: "news",
      },
      {
        path: "news",
        component: TheaNews,
      },
      {
        path: "msg",
        component: TheaMsg,
      },
    ],
  },
  {
    path: "/momo",
    component: Momo,
  },
  {
    path: "/yu",
    component: yu,
  },
  {
    path: "/user/:yonghuxinxila",
    component: () => import("../components/user.vue"),
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
