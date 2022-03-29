export interface WeatherModel {
  current: {
    dt: number;
    temp: number;
    wind_speed: number;
    humidity: number;
    pressure: number;
    sunrise: number;
    sunset: number;
    weather: [
      {
        icon: string;
        description: string;
      }
    ];
  };
  daily: DailyWeather[];
}

export interface DailyWeather {
  dt: number;
  temp: {
    day: number;
    min: number;
    max: number;
  };
  weather: [
    {
      icon: string;
      description: string;
    }
  ];
}

export interface CoordsModel {
  name: string;
  sys: {
    country: string;
  };
  coord: {
    lat: number;
    lon: number;
  };
}
