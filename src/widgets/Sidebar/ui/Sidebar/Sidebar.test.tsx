import { fireEvent, screen } from "@testing-library/react";
import { renderComponent } from "shared/lib/tests/renderComponent/renderComponent";
import { Sidebar } from "widgets/Sidebar";

describe("Sidebar", () => {
  test("Test rendering", () => {
    renderComponent(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("Toggle", () => {
    renderComponent(<Sidebar />);
    const sidebar = screen.getByTestId("sidebar");
    expect(sidebar).toBeInTheDocument();
    const toggleBtn = screen.getByTestId("toggle-btn");
    expect(toggleBtn).toBeInTheDocument();
    expect(sidebar.classList.contains("collapsed")).toBe(false);
    fireEvent.click(toggleBtn);
    expect(sidebar.classList.contains("collapsed")).toBe(true);
  });
});
