<template>
  <div class="w-full h-full sm:max-w-5xl sm:mx-auto">
    <div class="flex flex-col justify-center items-center">
      <WeatherSearch class="mb-4" />
      <p class="text-red-500 text-center" v-if="weatherError">
        {{ weatherError }}
      </p>

      <WeatherHeroData
        v-if="
          currentWeatherData &&
          coordData &&
          piniaLoaded &&
          forecast &&
          pastWeatherData
        "
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onUpdated, ref } from "vue";
import { useWeather } from "@/store/useWeather";
import { storeToRefs } from "pinia";
import WeatherSearch from "../components/WeatherSearch/WeatherSearch.vue";
import { useGlobal } from "@/store/useGlobal";

import WeatherHeroData from "@/components/WeatherHeroData/WeatherHeroData.vue";

export default defineComponent({
  name: "WeatherView",
  setup() {
    const weatherStore = useWeather();
    const globalStore = useGlobal();
    const {
      weatherError,
      lastQuery,
      currentWeatherData,
      coordData,
      forecast,
      pastWeatherData,
    } = storeToRefs(weatherStore);
    const { isLoading } = storeToRefs(globalStore);
    const piniaLoaded = ref(false);

    onUpdated(() => {
      if (weatherStore) {
        piniaLoaded.value = true;
      }
    });

    return {
      weatherError,
      lastQuery,
      isLoading,
      currentWeatherData,
      coordData,
      piniaLoaded,
      forecast,
      pastWeatherData,
    };
  },
  components: { WeatherSearch, WeatherHeroData },
});
</script>
