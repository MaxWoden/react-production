import { ThunkConfig } from "@/app/providers/StoreProvider";
import { Profile } from "@/entities/Profile";
import { getRouteProfile } from "@/shared/const/router";
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
    const { data } = await extra.api.get<Profile>(getRouteProfile(profileId));

    if (!data) throw new Error();

    return data;
  } catch (e) {
    console.log(e);

    return rejectWithValue("error");
  }
});
