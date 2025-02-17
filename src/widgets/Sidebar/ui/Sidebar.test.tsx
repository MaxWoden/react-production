import { fireEvent, screen } from "@testing-library/react";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation";
import { Sidebar } from "widgets/Sidebar";

describe("Sidebar", () => {
  test("Test rendering", () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("Toggle", () => {
    renderWithTranslation(<Sidebar />);
    const sidebar = screen.getByTestId("sidebar");
    expect(sidebar).toBeInTheDocument();
    const toggleBtn = screen.getByText("|||");
    expect(toggleBtn).toBeInTheDocument();
    expect(sidebar.classList.contains("collapsed")).toBe(false);
    fireEvent.click(toggleBtn);
    expect(sidebar.classList.contains("collapsed")).toBe(true);
  });
});
