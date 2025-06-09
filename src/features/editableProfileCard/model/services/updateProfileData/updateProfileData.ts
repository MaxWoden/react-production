import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { Profile } from "@/entities/Profile";
import { ValidateProfileErrors } from "../../consts/consts";
import { getProfileForm } from "../../selectors/getProfile";
import { validateProfileData } from "../validateProfileData/validateProfileData";

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ValidateProfileErrors[]>
>("profile/updateProfileData", async (_, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;

  const formData = getProfileForm(getState());
  if (!formData?.id) {
    rejectWithValue([ValidateProfileErrors.SERVER_ERROR]);
  }

  const errors = validateProfileData(formData);

  if (errors.length) {
    return rejectWithValue(errors);
  }

  try {
    const { data } = await extra.api.put<Profile>(
      `/profile/${formData?.id}`,
      formData
    );

    if (!data) throw new Error();

    return data;
  } catch (e) {
    console.log(e);
    return rejectWithValue([ValidateProfileErrors.SERVER_ERROR]);
  }
});
