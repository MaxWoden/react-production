import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localstorage";
import { User, UserSchema } from "../types/user";
import { userActions, userReducer } from "./userSlice";

const data: User = {
  id: "1",
  username: "admin",
};

describe("profileSlice", () => {
  test("test set authData", () => {
    const state: DeepPartial<UserSchema> = {};
    expect(
      userReducer(state as UserSchema, userActions.setAuthData(data))
    ).toEqual({ authData: data });
  });

  test("test init AuthData", () => {
    const state: DeepPartial<UserSchema> = {};
    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data));
    expect(
      userReducer(state as UserSchema, userActions.initAuthData())
    ).toEqual({ _inited: true, authData: data });
  });

  test("test logout", () => {
    const state: DeepPartial<UserSchema> = {};
    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data));
    userReducer(state as UserSchema, userActions.initAuthData());

    expect(userReducer(state as UserSchema, userActions.logout())).toEqual({});
    expect(localStorage.getItem(USER_LOCALSTORAGE_KEY)).toEqual(null);
  });
});
