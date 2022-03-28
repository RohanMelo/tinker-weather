import { defineStore } from "pinia";
import { useGlobal } from "./useGlobal";
import { WeatherModel, CoordsModel } from "@/models/weatherModel";
import axios from "axios";

export const useWeather = defineStore("weather", {
  state: () => ({
    lastQuery: "",
    weatherData: {} as WeatherModel,
    weatherError: "",
    selectedDayWeather: {},
  }),
  actions: {
    async fetchWeather(cityName: string) {
      if (this.weatherError) this.weatherError = "";
      if (cityName.length <= 3) {
        this.weatherError = "Please type a valid city name";
        return;
      }
      if (this.lastQuery === cityName) return;
      this.lastQuery = cityName;

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.lastQuery}&units=metric&appid=${process.env.VUE_APP_WEATHER_API_KEY}`;
      const globalStore = useGlobal();
      globalStore.setIsLoading(true);
      let coords = {} as CoordsModel;
      const response = await axios.get(url);
      try {
        coords = await response.data.coord;
        const onecallUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&units=metric&exclude=hourly,minutely&appid=${process.env.VUE_APP_WEATHER_API_KEY}`;
        const cityResponse = await axios.get(onecallUrl);
        this.weatherData = await cityResponse.data;
        console.log(this.weatherData);
      } catch (err) {
        this.weatherData = {} as WeatherModel;
        this.weatherError = "Failed to fetch weather data";
      } finally {
        globalStore.setIsLoading(false);
      }
    },
    setWeatherError(errorMessage: string) {
      this.weatherError = errorMessage;
    },
  },
});
