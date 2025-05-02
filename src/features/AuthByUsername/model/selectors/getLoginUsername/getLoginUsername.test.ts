import { StateSchema } from "@/app/providers/StoreProvider";
import { getLoginUsername } from "./getLoginUsername";

describe("getLoginError", () => {
  test("should return password", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: "username",
      },
    };
    expect(getLoginUsername(state as StateSchema)).toEqual("username");
  });

  test("should return empty string", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginUsername(state as StateSchema)).toEqual("");
  });
});
