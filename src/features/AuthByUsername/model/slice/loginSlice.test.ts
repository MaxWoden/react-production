import { DeepPartial } from "@reduxjs/toolkit";
import { LoginSchema } from "../types/loginSchema";
import { loginActions, loginReducer } from "./loginSlice";
import { StateSchema } from "app/providers/StoreProvider";
import exp from "constants";

describe("loginSlice", () => {
  test("test set username", () => {
    const state: DeepPartial<LoginSchema> = { username: "admin" };
    expect(state.username).toEqual("admin");
    expect(
      loginReducer(state as LoginSchema, loginActions.setUsername("adminadmin"))
    ).toEqual({ username: "adminadmin" });
  });

  test("test set password", () => {
    const state: DeepPartial<LoginSchema> = { password: "123" };
    expect(state.password).toEqual("123");
    expect(
      loginReducer(state as LoginSchema, loginActions.setPassword("123123"))
    ).toEqual({ password: "123123" });
  });
});
