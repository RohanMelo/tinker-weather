<template>
  <div class="w-full h-full sm:max-w-5xl sm:mx-auto">
    <div class="flex flex-col justify-center items-center">
      <TextWrapper :isHeading="true">Weather by City</TextWrapper>
      <WeatherSearch class="mb-4" />
      <p class="text-red-500 text-center" v-if="weatherError">
        {{ weatherError }}
      </p>
      <LoadingSpinner v-if="isLoading" />
      <div class="" v-if="weatherData.current">
        <p>{{ weatherData?.current.temp }} C</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useWeather } from "@/store/useWeather";
import { storeToRefs } from "pinia";
import TextWrapper from "@/components/TextWrapper/TextWrapper.vue";
import WeatherSearch from "../components/WeatherSearch/WeatherSearch.vue";
import { useGlobal } from "@/store/useGlobal";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner.vue";

// import { useMouse } from "@vueuse/core";

export default defineComponent({
  name: "WeatherView",
  setup() {
    const weatherStore = useWeather();
    const globalStore = useGlobal();
    const { weatherError, weatherData, lastQuery } = storeToRefs(weatherStore);
    const { isLoading } = storeToRefs(globalStore);

    return {
      weatherError,
      weatherData,
      lastQuery,
      isLoading,
    };
  },
  components: { TextWrapper, WeatherSearch, LoadingSpinner },
});
</script>
