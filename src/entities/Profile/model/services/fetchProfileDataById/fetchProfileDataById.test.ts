import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { Profile } from "../../types/profile";
import { fetchProfileDataById } from "./fetchProfileDataById";

const data: Profile = {
  id: " 1",
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

describe("fetchProfileData", () => {
  test("success", async () => {
    const thunk = new TestAsyncThunk(fetchProfileDataById);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk(data.id);

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(data);
  });

  test("error login", async () => {
    const thunk = new TestAsyncThunk(fetchProfileDataById);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk("1");

    expect(result.meta.requestStatus).toBe("rejected");
  });
});
