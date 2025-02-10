import { Button } from "./Button";
import { render, screen } from "@testing-library/react";

describe("Button", () => {
  test("Test rendering", () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText("TEST")).toBeInTheDocument();
  });
});
