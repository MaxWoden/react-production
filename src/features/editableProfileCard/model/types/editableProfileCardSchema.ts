import { Profile } from "entities/Profile";

export enum ValidateProfileError {
  NO_DATA = "NO_DATA",
  SERVER_ERROR = "SERVER_ERROR",
  INCORRECT_USER_DATA = "INCORRECT_USER_DATA",
  INCORRECT_AGE = "INCORRECT_AGE",
  INCORRECT_CITY = "INCORRECT_CITY",
}

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
  validateErrors?: ValidateProfileError[];
}
