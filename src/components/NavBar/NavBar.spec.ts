import { mount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import { createRouter, createWebHistory } from "vue-router";

import NavBar from "./NavBar.vue";
import WeatherView from "@/views/WeatherView.vue";
import { useGlobal } from "@/store/useGlobal";

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", component: WeatherView }],
});

describe("NavBar.vue", () => {
  it("renders NavBar with logo, toggles darkMode", async () => {
    const wrapper = mount(NavBar, {
      stubs: ["router-link", "router-view"],
      global: {
        plugins: [router, createTestingPinia()],
      },
    });

    const logo = wrapper.findAll("img");
    expect(logo.length).toBe(1);

    const store = useGlobal();
    store.darkMode = false;

    wrapper.find("button").trigger("click");
    store.$patch({ darkMode: true });
    expect(store.darkMode).toBe(true);
  });
});
