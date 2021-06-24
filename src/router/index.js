import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Pay from "../views/Pay.vue";
import Error from "../views/Error.vue";
import Success from "../views/Success.vue";
import { queryChecker } from "../utils/queryChecker";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/pay",
    name: "Pay",
    component: Pay,
  },
  {
    path: "/error",
    name: "Error",
    component: Error,
  },
  {
    path: "/success",
    name: "Success",
    component: Success,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name == "Pay") {
    if (!queryChecker(to.query)) next("/error?type=param");
    next();
  } else next();
});

export default router;
