import { render } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import BaseInput from "./BaseInput.vue";

const sampleInput = "input test";
const sampleLabel = "search";

describe("BaseInput.vue", () => {
  it("renders input and typing updates value", () => {
    const { getByRole } = render(BaseInput, {
      props: {
        id: "inputid",
        type: "text",
        labelText: sampleLabel,
      },
    });

    const component = getByRole("textbox", {
      name: /search/i,
    });
    expect(component).toBeVisible();

    userEvent.type(component, sampleInput);
    expect(component).toHaveValue(sampleInput);
  });
});
