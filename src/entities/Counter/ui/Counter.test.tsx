import { fireEvent, screen } from "@testing-library/react";
import { renderComponent } from "shared/lib/tests/renderComponent/renderComponent";
import { Counter } from "./Counter";

describe("Counter", () => {
  test("Test rendering", () => {
    renderComponent(<Counter />, {
      initialState: {
        counter: { value: 10 },
      },
    });
    expect(screen.getByTestId("value-title")).toHaveTextContent("10");
  });

  test("Increment", () => {
    renderComponent(<Counter />, {
      initialState: {
        counter: { value: 10 },
      },
    });
    const valueTitle = screen.getByTestId("value-title");
    expect(valueTitle).toHaveTextContent("10");
    fireEvent.click(screen.getByTestId("increment-btn"));
    expect(valueTitle).toHaveTextContent("11");
  });

  test("Decrement", () => {
    renderComponent(<Counter />, {
      initialState: {
        counter: { value: 10 },
      },
    });
    const valueTitle = screen.getByTestId("value-title");
    expect(valueTitle).toHaveTextContent("10");
    fireEvent.click(screen.getByTestId("decrement-btn"));
    expect(valueTitle).toHaveTextContent("9");
  });

  test("Increment and decrement", () => {
    renderComponent(<Counter />, {
      initialState: {
        counter: { value: 10 },
      },
    });
    const valueTitle = screen.getByTestId("value-title");
    expect(valueTitle).toHaveTextContent("0");
    fireEvent.click(screen.getByTestId("increment-btn"));
    expect(valueTitle).toHaveTextContent("1");
    fireEvent.click(screen.getByTestId("decrement-btn"));
    expect(valueTitle).toHaveTextContent("0");
  });
});
