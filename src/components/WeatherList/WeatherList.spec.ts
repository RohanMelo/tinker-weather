import { screen, render } from "@testing-library/vue";
import { createTestingPinia } from "@pinia/testing";

import WeatherList from "./WeatherList.vue";

describe("WeatherList.vue", () => {
  it("renders component", () => {
    const { getByText } = render(WeatherList, {
      global: {
        plugins: [createTestingPinia()],
      },
    });

    const forecastText = getByText(/7 day forecast/i);
    expect(forecastText).toBeVisible();
    const forecastContainer = screen.getByTestId("forecast-container");
    expect(forecastContainer).toBeVisible();
  });
});
