import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  test("Test rendering", () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText("TEST")).toBeInTheDocument();
  });
});
