import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getLoginPassword } from "./getLoginPassword";

describe("getLoginError", () => {
  test("should return password", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: "password",
      },
    };
    expect(getLoginPassword(state as StateSchema)).toEqual("password");
  });

  test("should return empty string", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginPassword(state as StateSchema)).toEqual("");
  });
});
