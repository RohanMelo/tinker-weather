import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useGlobal = defineStore("global", {
  state: () => ({
    darkMode: useStorage("darkMode", false),
    isLoading: false,
  }),
  actions: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      useStorage("darkMode", this.darkMode);
    },
    setIsLoading(value: boolean) {
      this.isLoading = value;
    },
  },
});
