import { ThunkConfig } from "@/app/providers/StoreProvider";
import {
  LAST_DESIGN_LOCALSTORAGE_KEY,
  USER_LOCALSTORAGE_KEY,
} from "@/shared/const/localstorage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserDataByIdQuery } from "../../api/userApi";
import { User } from "../types/user";

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
  "user/initAuthData",
  async (_, thunkApi) => {
    const { rejectWithValue, dispatch } = thunkApi;
    const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY);

    if (!userId) {
      return rejectWithValue("error");
    }

    try {
      const response = await dispatch(
        getUserDataByIdQuery(JSON.parse(userId))
      ).unwrap();

      localStorage.setItem(
        LAST_DESIGN_LOCALSTORAGE_KEY,
        response.features?.isAppRedesigned ? "new" : "old"
      );

      return response;
    } catch (e) {
      console.log(e);

      return rejectWithValue("error");
    }
  }
);
