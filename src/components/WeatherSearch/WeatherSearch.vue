<template>
  <div class="pt-4">
    <BaseInput
      id="weatherSearch"
      type="search"
      v-model="search"
      :hasIcon="true"
      placeholder="City name"
      inputStyle="pl-10 pr-2 py-2 rounded-md border-2 border-solid"
      @onEnterPress="handleSearch"
    >
      <template #icon>
        <button
          type="button"
          class="p-1 focus:outline-none focus:shadow-outline"
          @click="handleSearch"
        >
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            class="w-6 h-6"
            data-testid="search-icon"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </button>
      </template>
    </BaseInput>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { storeToRefs } from "pinia";
import { useWeather } from "@/store/useWeather";
import BaseInput from "../BaseInput/BaseInput.vue";

export default defineComponent({
  setup() {
    const weatherStore = useWeather();
    const { lastQuery } = storeToRefs(weatherStore);
    const search = ref("");

    const handleSearch = async () => {
      weatherStore.fetchWeather(search.value);
    };

    return { search, lastQuery, handleSearch };
  },
  components: { BaseInput },
});
</script>

<style scoped></style>
