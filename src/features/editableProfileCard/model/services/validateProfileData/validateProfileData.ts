import { Profile } from "@/entities/Profile";
import { ValidateProfileErrors } from "../../consts/consts";

export const validateProfileData = (profile?: Profile) => {
  if (!profile) return [ValidateProfileErrors.NO_DATA];

  const { firstname, lastname, age, city } = profile;
  const errors: ValidateProfileErrors[] = [];

  if (!firstname || !lastname) {
    errors.push(ValidateProfileErrors.INCORRECT_USER_DATA);
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(ValidateProfileErrors.INCORRECT_AGE);
  }

  if (!city) {
    errors.push(ValidateProfileErrors.INCORRECT_CITY);
  }

  return errors;
};
