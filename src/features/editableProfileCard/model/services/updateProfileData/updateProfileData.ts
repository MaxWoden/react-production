import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider/config/StateSchema";
import { Profile } from "entities/Profile";
import { getProfileForm } from "../../selectors/getProfile";
import { validateProfileData } from "../validateProfileData/validateProfileData";
import { ValidateProfileError } from "../../types/editableProfileCardSchema";

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ValidateProfileError[]>
>("profile/updateProfileData", async (_, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;

  const formData = getProfileForm(getState());
  if (!formData?.id) {
    rejectWithValue([ValidateProfileError.SERVER_ERROR]);
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
    return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
  }
});
