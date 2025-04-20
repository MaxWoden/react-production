import { screen } from "@testing-library/react";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { Profile } from "entities/Profile";
import { renderComponent } from "shared/lib/tests/renderComponent/renderComponent";
import { profileReducer } from "../../model/slice/profileSlice";
import { EditableProfileCard } from "./EditableProfileCard";
import userEvent from "@testing-library/user-event";

const profile: Profile = {
  id: "1",
  firstname: "admin",
  lastname: "admin",
  age: 20,
  currency: Currency.EUR,
  country: Country.UA,
  city: "Moscow",
  username: "admin123",
};

describe("EditableProfileCard", () => {
  test("Test rendering", () => {
    renderComponent(<EditableProfileCard id="1" />, {
      initialState: {
        profile: {
          readonly: true,
          data: profile,
          form: profile,
        },
      },
      asyncReducers: { profile: profileReducer },
    });
    expect(screen.getByTestId("EditableProfileCard")).toBeInTheDocument();
    expect(
      screen.getByTestId("EditableProfileCardHeader.EditButton")
    ).toBeInTheDocument();
    // userEvent.click(screen.getByTestId("EditableProfileCardHeader.EditButton"));
    // expect(
    //   screen.getByTestId("EditableProfileCardHeader.CancelButton")
    // ).toBeInTheDocument();
  });
});
