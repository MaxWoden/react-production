import { StateSchema } from "app/providers/StoreProvider";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency/model/types/currency";

import { ValidateProfileErrors } from "../consts/consts";
import {
  getProfileData,
  getProfileError,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidateErrors,
} from "../selectors/getProfile";
import { getProfileForm } from "./getProfile";

describe("getProfile", () => {
  test("should return error", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: "error",
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });

  test("should work with filled state", () => {
    const data = {
      firstname: "Максим",
      lastname: "Казаков",
      age: 19,
      country: Country.RU,
      currency: Currency.RUB,
      city: "Казань",
      username: "admin",
      avatar:
        "https://i.pinimg.com/736x/37/8a/27/378a270e775265622393da8c0527417e.jpg",
    };

    const state: DeepPartial<StateSchema> = {
      profile: {
        data: data,
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });

  test("should return error", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: "error",
      },
    };
    expect(getProfileError(state as StateSchema)).toEqual("error");
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileError(state as StateSchema)).toEqual(undefined);
  });

  test("should return error", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: "error",
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });

  test("should work with filled state", () => {
    const data = {
      firstname: "Максим",
      lastname: "Казаков",
      age: 19,
      currency: Currency.RUB,
      country: Country.RU,
      city: "Казань",
      username: "admin",
      avatar:
        "https://i.pinimg.com/736x/37/8a/27/378a270e775265622393da8c0527417e.jpg",
    };

    const state: DeepPartial<StateSchema> = { profile: { form: data } };
    expect(getProfileForm(state as StateSchema)).toEqual(data);
  });

  test("should return true", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true,
      },
    };
    expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
  });

  test("should return false", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: false,
      },
    };
    expect(getProfileIsLoading(state as StateSchema)).toEqual(false);
  });

  test("should return true", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: true,
      },
    };
    expect(getProfileReadonly(state as StateSchema)).toEqual(true);
  });

  test("should return false", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: false,
      },
    };
    expect(getProfileReadonly(state as StateSchema)).toEqual(false);
  });

  test("should return empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });

  test("should return filled state", () => {
    const data: ValidateProfileErrors[] = [
      ValidateProfileErrors.INCORRECT_AGE,
      ValidateProfileErrors.INCORRECT_CITY,
      ValidateProfileErrors.INCORRECT_USER_DATA,
      ValidateProfileErrors.NO_DATA,
      ValidateProfileErrors.SERVER_ERROR,
    ];
    const state: DeepPartial<StateSchema> = {
      profile: { validateErrors: data },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(data);
  });
});
