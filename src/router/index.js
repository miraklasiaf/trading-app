import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import AuthRequired from "../utils/AuthRequired";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: () => import("../views/Portfolio.vue")
  },
  {
    path: "/stocks",
    name: "stocks",
    component: () => import("../views/Stocks.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/auth/Login.vue")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/auth/Register.vue")
  },
  {
    path: "/dashboard",
    component: () => import("../views/Dashboard.vue"),
    beforeEnter: AuthRequired
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
