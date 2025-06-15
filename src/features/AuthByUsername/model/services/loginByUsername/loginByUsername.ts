import { ThunkConfig } from "@/app/providers/StoreProvider";
import { User, userActions } from "@/entities/User";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  ThunkConfig<string>
>("login/loginByUsername", async (authData, thunkApi) => {
  const { extra, dispatch, rejectWithValue } = thunkApi;

  try {
    const { data } = await extra.api.post<User>("/login", authData);

    if (!data) {
      throw new Error();
    }

    dispatch(userActions.setAuthData(data));

    return data;
  } catch (e) {
    console.log(e);
    return rejectWithValue("error");
  }
});
