<template>
  <div :class="darkMode ? 'dark' : ''" class="relative" data-cy="main-view">
    <div
      class="absolute h-screen w-screen inset-0 z-40 bg-black bg-opacity-50"
      v-if="isLoading"
    >
      <LoadingSpinner class="absolute left-0 right-0 top-[20%] mx-auto w-64" />
    </div>
    <NavBar />
    <div class="px-4 bg-white dark:bg-gray-700 w-screen h-screen overflow-auto">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";
import { useGlobal } from "./store/useGlobal";
import NavBar from "./components/NavBar/NavBar.vue";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner.vue";

export default defineComponent({
  name: "App",
  setup() {
    const globalStore = useGlobal();
    const { darkMode, isLoading } = storeToRefs(globalStore);
    return {
      darkMode,
      isLoading,
    };
  },
  components: { NavBar, LoadingSpinner },
});
</script>

<style scoped></style>
