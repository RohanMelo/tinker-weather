import { render } from "@testing-library/vue";
import WeatherCard from "./WeatherCard.vue";

describe("WeatherCard.vue", () => {
  it("renders component with correct data", () => {
    const { getByText } = render(WeatherCard, {
      props: {
        item: mockItem,
      },
    });

    const date = getByText("03/29");
    expect(date).toBeVisible();
    const description = getByText("Cloudy");
    expect(description).toBeVisible();
  });

  it("renders correct data for a past day", () => {
    const { getByText } = render(WeatherCard, {
      props: {
        item: mockPastItem,
        isPast: true,
      },
    });

    const date = getByText("03/28");
    expect(date).toBeVisible();
    const description = getByText("Sunny");
    expect(description).toBeVisible();
  });
});

const mockItem = {
  dt: 1648561254,
  temp: {
    day: 15.6,
  },
  weather: [
    {
      icon: "04d",
      description: "Cloudy",
    },
  ],
};

const mockPastItem = {
  current: {
    dt: 1648474854,
    temp: 20.1,
    weather: [
      {
        icon: "04d",
        description: "Sunny",
      },
    ],
  },
};
