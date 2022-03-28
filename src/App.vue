<template>
  <div :class="darkMode ? 'dark' : ''">
    <nav class="flex py-2 px-2 bg-white dark:bg-gray-700">
      <router-link to="/"
        ><img
          src="@/assets/images/logo_transp.png"
          alt="tinker weather logo"
          width="100"
          class="dark:invert"
      /></router-link>
      <button class="" @click="toggleDarkMode()">Toggle Dark Mode</button>
    </nav>
    <router-view class="px-2" />
  </div>
</template>

<script lang="ts">
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";
import { useGlobal } from "./store/useGlobal";

export default defineComponent({
  name: "App",
  setup() {
    const globalStore = useGlobal();
    const { darkMode, isLoading } = storeToRefs(globalStore);
    const { toggleDarkMode } = globalStore;
    return {
      darkMode,
      isLoading,
      toggleDarkMode,
    };
  },
});
</script>

<style scoped></style>
