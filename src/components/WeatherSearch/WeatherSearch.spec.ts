import { screen, render } from "@testing-library/vue";
import { createTestingPinia } from "@pinia/testing";

import WeatherSearch from "./WeatherSearch.vue";
import userEvent from "@testing-library/user-event";

describe("WeatherSearch.vue", () => {
  it("renders search component with icon", async () => {
    const { getByRole, emitted } = render(WeatherSearch, {
      global: {
        plugins: [createTestingPinia()],
      },
    });

    const component = getByRole("button");
    const icon = screen.getByTestId("search-icon");
    expect(component).toBeVisible();
    expect(component).toContainElement(icon);

    await userEvent.click(component);
    expect(emitted().click).toBeTruthy();
  });
});
