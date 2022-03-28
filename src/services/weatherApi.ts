import axios, { AxiosResponse } from "axios";
import dayjs from "dayjs";
import { CoordsModel, WeatherModel } from "@/models/weatherModel";

const axiosInstance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

const apiKey = process.env.VUE_APP_WEATHER_API_KEY;
export type Error = unknown;
export type CoordsResponse = [null, CoordsModel] | [Error];
export type WeatherResponse = [null, WeatherModel, AxiosResponse[]] | [Error];

export async function getCoords(cityName: string): Promise<CoordsResponse> {
  try {
    const { data } = await axiosInstance.get<CoordsModel>(
      `/weather?q=${cityName}&units=metric&appid=${apiKey}`
    );
    return [null, data];
  } catch (error) {
    console.error(error);
    return [error];
  }
}

export async function getWeatherByGeoCoords(
  lat: number,
  lon: number
): Promise<WeatherResponse> {
  let currentDayWeather = {} as WeatherModel;
  const pastDaysWeather = [] as AxiosResponse[];

  const endpoints = [
    `/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=hourly,minutely&appid=${apiKey}`,
  ];

  for (let i = 1; i <= 2; i++) {
    const dayInUnix = dayjs().subtract(i, "day").unix();
    const newEndpoint = `/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${dayInUnix}&units=metric&exclude=hourly,minutely&appid=${apiKey}`;
    endpoints.push(newEndpoint);
  }
  try {
    const [{ data: currentDay }, ...pastDays] = await Promise.all(
      endpoints.map((endpoint) => axiosInstance.get(endpoint))
    );

    currentDayWeather = { ...currentDay };
    if (pastDays.length > 0) {
      pastDays.forEach((day) => pastDaysWeather.push(day.data));
    }

    return [null, currentDayWeather, pastDaysWeather];
  } catch (error) {
    console.error(error);
    return [error];
  }
}
