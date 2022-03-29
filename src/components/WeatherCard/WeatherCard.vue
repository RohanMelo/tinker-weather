<template>
  <div
    class="w-full flex flex-col justify-start items-center relative border-2 border-solid border-gray-300 rounded-md px-4 py-2 sm:py-6 sm:text-center shadow-md sm:hover:scale-110 text-textprimary dark:text-white mb-2 sm:mb-0"
    v-if="item"
  >
    <img
      :src="`http://openweathermap.org/img/wn/${
        isPast ? item.current.weather[0].icon : item.weather[0].icon
      }.png`"
      alt="weather icon"
      class="sm:absolute top-[-25%] left-[25%]"
    />
    <h3 class="font-rubik">
      {{
        isPast
          ? formatUnixTime(item.current.dt, "date")
          : formatUnixTime(item.dt, "date")
      }}
    </h3>
    <p class="font-rubik mb-2 text-brandprimary">
      {{ isPast ? item.current.temp : item.temp.day }} &deg;C
    </p>
    <p class="block text-[10px]">
      {{
        isPast
          ? item.current.weather[0].description
          : item.weather[0].description
      }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { formatUnixTime } from "@/utils/formatTime";

export default defineComponent({
  props: {
    item: {
      type: Object,
    },
    isPast: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {
      formatUnixTime,
    };
  },
});
</script>

<style scoped></style>
