import { ThunkConfig } from "@/app/providers/StoreProvider/config/StateSchema";
import { Profile } from "@/entities/Profile";
import { RoutePath } from "@/shared/const/router";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProfileDataById = createAsyncThunk<
  Profile,
  string,
  ThunkConfig<string>
>("profile/fetchProfileData", async (profileId, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  if (!profileId) {
    return rejectWithValue("error");
  }

  try {
    const { data } = await extra.api.get<Profile>(
      `${RoutePath.profile}${profileId}`
    );

    if (!data) throw new Error();

    return data;
  } catch (e) {
    console.log(e);

    return rejectWithValue("error");
  }
});
