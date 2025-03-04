import { StateSchema } from "app/providers/StoreProvider";
import { getProfileData } from "./getProfileData";
import { Currency } from "entities/Currency/model/types/currency";
import { Country } from "entities/Country";

describe("getProfileData", () => {
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
});
