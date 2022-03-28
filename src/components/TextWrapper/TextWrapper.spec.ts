import { render } from "@testing-library/vue";
import TextWrapper from "./TextWrapper.vue";

const content = "Weather Test";
const headingClass = "rubik";

describe("TextWrapper.vue", () => {
  it("renders paragraph with default props", () => {
    const { getByText } = render(TextWrapper, {
      slots: {
        default: content,
      },
    });

    const textComponent = getByText(content);
    expect(textComponent).not.toHaveClass(headingClass);
  });

  it("renders heading with heading props", () => {
    const { getByText } = render(TextWrapper, {
      slots: {
        default: content,
      },
      props: {
        isHeading: true,
      },
    });

    const textComponent = getByText(content);
    expect(textComponent).toHaveClass(headingClass, "font-bold");
  });
});
