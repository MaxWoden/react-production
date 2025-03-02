import { StateSchema } from "app/providers/StoreProvider";
import { getProfileValidateErrors } from "./getProfileValidateErrors";
import { ValidateProfileError } from "../../types/profile";

describe("getProfileForm", () => {
  test("should return empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });

  test("should return filled state", () => {
    const data: ValidateProfileError[] = [
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_CITY,
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.NO_DATA,
      ValidateProfileError.SERVER_ERROR,
    ];
    const state: DeepPartial<StateSchema> = {
      profile: { validateErrors: data },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(data);
  });
});
