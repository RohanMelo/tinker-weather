<template>
  <div
    class="flex flex-col justify-center items-center mb-10 text-textprimary dark:text-white"
    v-if="currentWeatherData && coordData"
    data-testid="weatherhero-container"
  >
    <TextWrapper :isHeading="true" class="text-[30px] mb-2"
      >{{ coordData.name }}, {{ coordData.sys.country }}</TextWrapper
    >

    <div class="grid grid-cols-2 gap-x-4">
      <div>
        <TextWrapper
          class="capitalize text-lg"
          v-if="currentWeatherData.current.weather[0]"
        >
          {{ currentWeatherData.current.weather[0].description }}</TextWrapper
        >
        <div class="grid grid-cols-2">
          <DataDisplay label="Temp:"
            >{{ currentWeatherData.current.temp }} &deg;C</DataDisplay
          >
          <DataDisplay label="High:"
            >{{ currentWeatherData.daily[0].temp.max }} &deg;C</DataDisplay
          >
          <DataDisplay label="Low:"
            >{{ currentWeatherData.daily[0].temp.min }} &deg;C</DataDisplay
          >
        </div>
      </div>
      <div v-if="currentWeatherData.current.weather[0]">
        <img
          :src="`http://openweathermap.org/img/wn/${currentWeatherData.current.weather[0].icon}@2x.png`"
          alt="weather icon"
        />
      </div>
    </div>

    <button
      class="flex justify-center items-center my-2 font-bold text-brandprimary outline-none"
      @click="extraInfoVisible = !extraInfoVisible"
      data-cy="additional-button"
    >
      Additional Info
      <div class="ml-2 text-brandprimary" v-if="extraInfoVisible">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentWeatherDataColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </div>
      <div class="ml-2" v-else>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentWeatherDataColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </button>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-4"
      v-if="extraInfoVisible"
    >
      <div class="grid grid-cols-2 gap-x-4 sm:gap-x-0">
        <DataDisplay label="Wind Speed:"
          >{{ currentWeatherData?.current.wind_speed }} m/s</DataDisplay
        >
        <DataDisplay label="Humidity:"
          >{{ currentWeatherData?.current.humidity }} %</DataDisplay
        >
        <DataDisplay label="Pressure:"
          >{{ currentWeatherData?.current.pressure }} hPa</DataDisplay
        >
      </div>
      <div class="grid grid-cols-2 gap-x-4 sm:gap-x-0">
        <DataDisplay label="Sunrise:">{{
          formatUnixTime(currentWeatherData?.current.sunrise)
        }}</DataDisplay>
        <DataDisplay label="Sunset:">{{
          formatUnixTime(currentWeatherData?.current.sunset)
        }}</DataDisplay>
      </div>
    </div>
  </div>
  <WeatherList v-if="forecast && pastWeatherData" />
</template>

<script lang="ts">
import { useWeather } from "@/store/useWeather";
import { defineComponent, ref } from "vue";
import WeatherList from "../WeatherList/WeatherList.vue";
import TextWrapper from "../TextWrapper/TextWrapper.vue";
import { storeToRefs } from "pinia";
import { formatUnixTime } from "@/utils/formatTime";
import DataDisplay from "../DataDisplay/DataDisplay.vue";

export default defineComponent({
  setup() {
    const weatherStore = useWeather();
    const { coordData, currentWeatherData, forecast, pastWeatherData } =
      storeToRefs(weatherStore);

    const extraInfoVisible = ref(false);

    return {
      coordData,
      forecast,
      pastWeatherData,
      extraInfoVisible,
      currentWeatherData,
      formatUnixTime,
    };
  },
  components: { WeatherList, TextWrapper, DataDisplay },
});
</script>

<style scoped></style>
