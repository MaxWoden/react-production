import { Country } from "entities/Country";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { Profile } from "../../types/profile";
import { fetchProfileData } from "./fetchProfileData";

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

describe("fetchProfileData", () => {
  test("success", async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(data);
  });

  test("error login", async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe("rejected");
  });
});
