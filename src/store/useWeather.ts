import { defineStore } from "pinia";
import { useGlobal } from "./useGlobal";
import { WeatherModel, CoordsModel, DailyWeather } from "@/models/weatherModel";

import { getCoords, getWeatherByGeoCoords } from "@/services/weatherApi";
type ErrorMessage = string | any;
export const useWeather = defineStore("weather", {
  state: () => ({
    lastQuery: "",
    currentWeatherData: {} as WeatherModel,
    forecast: [] as DailyWeather[],
    pastWeatherData: [] as WeatherModel[],
    weatherError: "" as ErrorMessage,
    coordData: {} as CoordsModel,
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

      const globalStore = useGlobal();
      globalStore.setIsLoading(true);
      try {
        const coordsResult = await getCoords(this.lastQuery);
        this.coordData = coordsResult;
        console.log("Coord Data: ", this.coordData);
        const [currentDayWeather, pastDaysWeather] =
          await getWeatherByGeoCoords(
            this.coordData.coord.lat,
            this.coordData.coord.lon
          );
        this.currentWeatherData = currentDayWeather;
        this.forecast = currentDayWeather.daily;
        this.pastWeatherData = pastDaysWeather;
      } catch (err) {
        console.log(err);
        this.weatherError = err;
      } finally {
        globalStore.setIsLoading(false);
      }
    },
    setWeatherError(errorMessage: string) {
      this.weatherError = errorMessage;
    },
  },
});
