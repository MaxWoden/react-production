import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import { Profile } from "@/entities/Profile";
import { $api } from "@/shared/api/api";
import { renderComponent } from "@/shared/lib/tests/renderComponent/renderComponent";
import { profileReducer } from "../../model/slice/profileSlice";
import { EditableProfileCard } from "./EditableProfileCard";

const profile: Profile = {
  id: "1",
  firstname: "admin",
  lastname: "admin",
  age: 465,
  currency: Currency.USD,
  country: Country.AM,
  city: "Moscow",
  username: "admin213",
};

const options = {
  initialState: {
    profile: {
      readonly: true,
      data: profile,
      form: profile,
    },
    user: {
      authData: { profileId: "1", username: "admin" },
    },
  },
  asyncReducers: {
    profile: profileReducer,
  },
};

describe("features/EditableProfileCard", () => {
  test("Режим рид онли должен переключиться", async () => {
    renderComponent(<EditableProfileCard profileId="1" />, options);
    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.EditButton")
    );
    expect(
      screen.getByTestId("EditableProfileCardHeader.CancelButton")
    ).toBeInTheDocument();
  });

  test("При отмене значения должны обнуляться", async () => {
    renderComponent(<EditableProfileCard profileId="1" />, options);
    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.EditButton")
    );

    const firstnameInput = screen.getByTestId("ProfileCard.firstname");
    const lastnameInput = screen.getByTestId("ProfileCard.lastname");

    await userEvent.clear(firstnameInput);
    await userEvent.clear(lastnameInput);

    await userEvent.type(firstnameInput, "user");
    await userEvent.type(lastnameInput, "user");

    expect(firstnameInput).toHaveValue("user");
    expect(lastnameInput).toHaveValue("user");

    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.CancelButton")
    );

    expect(firstnameInput).toHaveValue("admin");
    expect(lastnameInput).toHaveValue("admin");
  });

  test("Должна появиться ошибка", async () => {
    renderComponent(<EditableProfileCard profileId="1" />, options);
    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.EditButton")
    );

    await userEvent.clear(screen.getByTestId("ProfileCard.firstname"));

    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.SaveButton")
    );

    expect(
      screen.getByTestId("EditableProfileCard.Error.Paragraph")
    ).toBeInTheDocument();
  });

  test("Если нет ошибок валидации, то на сервер должен уйти PUT запрос", async () => {
    const mockPutReq = jest.spyOn($api, "put");
    renderComponent(<EditableProfileCard profileId="1" />, options);
    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.EditButton")
    );

    await userEvent.type(screen.getByTestId("ProfileCard.firstname"), "user");

    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.SaveButton")
    );

    expect(mockPutReq).toHaveBeenCalled();
  });
});
