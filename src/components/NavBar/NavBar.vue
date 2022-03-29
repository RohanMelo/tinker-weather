<template>
  <nav
    class="flex justify-between items-center py-2 px-4 bg-white dark:bg-gray-700 text-textprimary dark:text-white"
  >
    <router-link to="/"
      ><img
        src="@/assets/images/logo_transp.png"
        alt="tinker weather logo"
        width="125"
        class=""
        id="logo"
    /></router-link>
    <button
      class="flex items-center justify-center text-[10px]"
      @click="toggleDarkMode()"
    >
      {{ darkMode ? "Light" : "Dark" }} Mode
      <div class="ml-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-3 w-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </div>
    </button>
  </nav>
</template>

<script lang="ts">
import { useGlobal } from "@/store/useGlobal";
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const globalStore = useGlobal();
    const { darkMode } = storeToRefs(globalStore);
    const { toggleDarkMode } = globalStore;

    return {
      toggleDarkMode,
      darkMode,
    };
  },
});
</script>

<style scoped></style>
