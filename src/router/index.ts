import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import WeatherView from "../views/WeatherView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "weather",
    component: WeatherView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
