import { classNames } from "shared/lib/classNames/classNames";

describe("classNames", () => {
  test("with only first param", () => {
    expect(classNames("someClass")).toBe("someClass");
  });
  test("with additional class", () => {
    expect(classNames("someClass", ["class1", "class2"])).toBe(
      "someClass class1 class2"
    );
  });
  test("with mods", () => {
    expect(
      classNames("someClass", ["class1", "class2"], {
        hovered: true,
        scrollable: true,
      })
    ).toBe("someClass class1 class2 hovered scrollable");
  });
  test("with mods false", () => {
    expect(
      classNames("someClass", ["class1", "class2"], {
        hovered: true,
        scrollable: false,
      })
    ).toBe("someClass class1 class2 hovered");
  });
  test("with mods undefined", () => {
    expect(
      classNames("someClass", ["class1", "class2"], {
        hovered: true,
        scrollable: undefined,
      })
    ).toBe("someClass class1 class2 hovered");
  });
  test("with mods and additional undefined", () => {
    expect(
      classNames(undefined, ["class1", undefined], {
        hovered: true,
        scrollable: undefined,
      })
    ).toBe(" class1 hovered");
  });
});
