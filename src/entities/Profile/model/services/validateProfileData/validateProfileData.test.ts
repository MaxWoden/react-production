import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { Profile, ValidateProfileError } from "../../types/profile";
import { validateProfileData } from "./validateProfileData";

describe("validateProfileData", () => {
  const data: Profile = {
    firstname: "Максим",
    lastname: "Казаков",
    age: 19,
    country: Country.RU,
    currency: Currency.EUR,
    city: "Казань",
    username: "admin",
    avatar:
      "https://i.pinimg.com/736x/37/8a/27/378a270e775265622393da8c0527417e.jpg",
  };

  test("should return filled correct state", async () => {
    const result = validateProfileData(data);
    expect(result).toEqual([]);
  });

  test("without firstname and lastname", async () => {
    const result = validateProfileData({
      ...data,
      firstname: "",
      lastname: "",
    });
    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test("incorrect age", async () => {
    const result = validateProfileData({
      ...data,
      age: undefined,
    });
    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test("incorrect city", async () => {
    const result = validateProfileData({
      ...data,
      city: undefined,
    });
    expect(result).toEqual([ValidateProfileError.INCORRECT_CITY]);
  });

  test("empty request", async () => {
    const result = validateProfileData();
    expect(result).toEqual([ValidateProfileError.NO_DATA]);
  });

  test("incorrect all", async () => {
    const result = validateProfileData({});
    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_CITY,
    ]);
  });
});
