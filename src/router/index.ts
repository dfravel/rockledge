// route.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Quote from "../components/Quote.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/quote",
      component: Quote
    }
  ]
});
