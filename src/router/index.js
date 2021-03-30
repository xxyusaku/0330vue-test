import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Member from "../views/Member.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/membeer/:id",
    name: "Member",
    component: Member,
    props: true,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router
