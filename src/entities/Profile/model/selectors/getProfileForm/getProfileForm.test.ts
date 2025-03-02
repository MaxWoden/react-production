import { StateSchema } from "app/providers/StoreProvider";
import { getProfileForm } from "./getProfileForm";
import { Currency } from "entities/Currency/model/types/currency";
import { Country } from "entities/Country";

describe("getProfileForm", () => {
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
});
