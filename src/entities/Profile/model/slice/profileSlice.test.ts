import { Country } from "entities/Country";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";
import { Profile, ProfileSchema, ValidateProfileError } from "../types/profile";
import { profileActions, profileReducer } from "./profileSlice";

const data: Profile = {
  firstname: "Максим",
  lastname: "Казаков",
  age: 19,
  country: Country.RU,
  city: "Казань",
  username: "admin",
  avatar:
    "https://i.pinimg.com/736x/37/8a/27/378a270e775265622393da8c0527417e.jpg",
};

describe("profileSlice", () => {
  test("test set readonly", () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };
    expect(
      profileReducer(state as ProfileSchema, profileActions.setReadonly(true))
    ).toEqual({ readonly: true });
  });

  test("test update profile", () => {
    const state: DeepPartial<ProfileSchema> = { form: { username: "max" } };
    expect(state.form?.username).toEqual("max");

    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({ username: "vlad" })
      )
    ).toEqual({ form: { username: "vlad" } });
  });

  test("test save edit", () => {
    const state: DeepPartial<ProfileSchema> = {
      data: { username: "max" },
      form: { username: "vlad" },
    };
    expect(state.data?.username).toEqual("max");

    expect(
      profileReducer(state as ProfileSchema, profileActions.saveEdit())
    ).toEqual({
      data: { username: "vlad" },
      form: { username: "vlad" },
      readonly: true,
    });
  });

  test("test cancel edit", () => {
    const state: DeepPartial<ProfileSchema> = {
      data: { username: "max" },
      form: { username: "vlad" },
    };
    expect(state.data?.username).toEqual("max");

    expect(
      profileReducer(state as ProfileSchema, profileActions.cancelEdit())
    ).toEqual({
      data: { username: "max" },
      form: { username: "max" },
      readonly: true,
      validateErrors: undefined,
    });
  });

  test("test update profile service pending", () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };

    expect(
      profileReducer(state as ProfileSchema, updateProfileData.pending)
    ).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });

  test("test update profile service fullfiled", () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };

    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(data, "")
      )
    ).toEqual({
      readonly: true,
      isLoading: false,
      validateErrors: undefined,
      form: data,
      data,
    });
  });
});
