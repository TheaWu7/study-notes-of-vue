import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("../views/home/Home");
Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import(/* webpackChunkName: "about" */ "../views/cart/cart"),
  },
  {
    path: "/category",
    name: "Category",
    component: () => import(/* webpackChunkName: "about" */ "../views/category/category.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import(/* webpackChunkName: "about" */ "../views/profile/profile.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
