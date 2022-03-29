<template>
  <TextWrapper class="font-bold text-xl mb-6">7 day Forecast</TextWrapper>
  <div
    class="flex flex-col min-w-full sm:min-w-0 sm:grid sm:grid-cols-4 sm:gap-x-2 sm:gap-y-6 mb-4 sm:mb-20 mx-4 sm:mx-0"
  >
    <div class="mx-2 sm:mx-0" v-for="item in forecast.slice(1)" :key="item.dt">
      <WeatherCard :item="item"></WeatherCard>
    </div>
  </div>
  <TextWrapper class="font-bold text-xl mb-6">Past 5 days</TextWrapper>
  <div
    class="flex flex-col min-w-full sm:min-w-0 sm:grid sm:grid-cols-4 sm:gap-x-2 sm:gap-y-6 mb-4 sm:mb-20 mx-4 sm:mx-0"
  >
    <div
      class=""
      v-for="pastItem in pastWeatherData"
      :key="pastItem.current.dt"
    >
      <WeatherCard :item="pastItem" :isPast="true"></WeatherCard>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WeatherCard from "../WeatherCard/WeatherCard.vue";
import TextWrapper from "../TextWrapper/TextWrapper.vue";
import { useWeather } from "@/store/useWeather";
import { storeToRefs } from "pinia";

export default defineComponent({
  setup() {
    const weatherStore = useWeather();
    const { forecast, pastWeatherData } = storeToRefs(weatherStore);

    return { forecast, pastWeatherData };
  },
  components: { WeatherCard, TextWrapper },
});
</script>

<style scoped></style>
