import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import "./index.css";
import { useWeather } from "./store/useWeather";

const app = createApp(App).use(router).use(createPinia());
app.config.globalProperties.weatherStore = useWeather();
app.mount("#app");
