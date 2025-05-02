import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import { Profile } from "@/entities/Profile";
import { ValidateProfileErrors } from "../../consts/consts";
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
    expect(result).toEqual([ValidateProfileErrors.INCORRECT_USER_DATA]);
  });

  test("incorrect age", async () => {
    const result = validateProfileData({
      ...data,
      age: undefined,
    });
    expect(result).toEqual([ValidateProfileErrors.INCORRECT_AGE]);
  });

  test("incorrect city", async () => {
    const result = validateProfileData({
      ...data,
      city: undefined,
    });
    expect(result).toEqual([ValidateProfileErrors.INCORRECT_CITY]);
  });

  test("empty request", async () => {
    const result = validateProfileData();
    expect(result).toEqual([ValidateProfileErrors.NO_DATA]);
  });

  test("incorrect all", async () => {
    const result = validateProfileData({});
    expect(result).toEqual([
      ValidateProfileErrors.INCORRECT_USER_DATA,
      ValidateProfileErrors.INCORRECT_AGE,
      ValidateProfileErrors.INCORRECT_CITY,
    ]);
  });
});
