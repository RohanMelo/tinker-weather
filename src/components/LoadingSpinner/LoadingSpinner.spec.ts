import { render, screen } from "@testing-library/vue";
import LoadingSpinner from "./LoadingSpinner.vue";

describe("LoadingSpinner.vue", () => {
  it("renders component", () => {
    render(LoadingSpinner);

    const component = screen.getByTestId("spinner-container");
    expect(component).toBeVisible;
  });
});
