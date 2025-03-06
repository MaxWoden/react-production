import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider/config/StateSchema";
import { Profile } from "../../../index";

export const fetchProfileDataById = createAsyncThunk<
  Profile,
  string | undefined,
  ThunkConfig<string>
>("profile/fetchProfileData", async (profileId, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  if (!profileId) {
    return rejectWithValue("error");
  }

  try {
    const { data } = await extra.api.get<Profile>(`/profile/${profileId}`);

    if (!data) throw new Error();

    return data;
  } catch (e) {
    console.log(e);

    return rejectWithValue("error");
  }
});
