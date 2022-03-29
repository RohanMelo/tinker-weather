import { render, screen } from "@testing-library/vue";
import DataDisplay from "./DataDisplay.vue";

describe("DataDisplay.vue", () => {
  it("renders component with label and displays slot content", () => {
    const { getByText } = render(DataDisplay, {
      props: {
        label: "Temp:",
      },
      slots: {
        default: "25.9 C",
      },
    });

    const component = getByText("Temp:");
    expect(component).toBeVisible();

    const innerText = screen.getByTestId("datadisplay-innerslot");
    expect(innerText).toHaveTextContent("25.9 C");
  });
});
