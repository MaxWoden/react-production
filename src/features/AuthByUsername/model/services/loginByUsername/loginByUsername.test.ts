import axios from "axios";
import { loginByUsername } from "./loginByUsername";
import { Dispatch } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import exp from "constants";
import { userActions } from "entities/User";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";

jest.mock("axios");

const mockedAxios = jest.mocked(axios, true);

describe("loginByUsername", () => {
  //   let dispatch: Dispatch;
  //   let getState: () => StateSchema;

  //   beforeEach(() => {
  //     dispatch = jest.fn();
  //     getState = jest.fn();
  //   });

  //   test("success", async () => {
  //     const userValue = { username: "admin", id: "1" };
  //     mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

  //     const action = loginByUsername({ username: "admin", password: "123" });
  //     const result = await action(dispatch, getState, undefined);

  //     expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
  //     expect(dispatch).toHaveBeenCalledTimes(3);
  //     expect(mockedAxios.post).toHaveBeenCalled();
  //     expect(result.meta.requestStatus).toBe("fulfilled");
  //     expect(result.payload).toEqual(userValue);
  //   });

  //   test("error login", async () => {
  //     mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

  //     const action = loginByUsername({ username: "admin", password: "123" });
  //     const result = await action(dispatch, getState, undefined);

  //     expect(dispatch).toHaveBeenCalledTimes(2);
  //     expect(mockedAxios.post).toHaveBeenCalled();
  //     expect(result.meta.requestStatus).toBe("rejected");
  //     expect(result.payload).toBe("error");
  //   });

  test("success", async () => {
    const userValue = { username: "admin", id: "1" };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({
      username: "admin",
      password: "123",
    });

    expect(thunk.dispatch).toHaveBeenCalledWith(
      userActions.setAuthData(userValue)
    );

    expect(thunk.dispatch).toHaveBeenCalledTimes(3);

    expect(mockedAxios.post).toHaveBeenCalled();

    expect(result.meta.requestStatus).toBe("fulfilled");

    expect(result.payload).toEqual(userValue);
  });

  test("error login", async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({
      username: "",
      password: "",
    });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);

    expect(mockedAxios.post).toHaveBeenCalled();

    expect(result.meta.requestStatus).toBe("rejected");

    expect(result.payload).toBe("error");
  });
});
