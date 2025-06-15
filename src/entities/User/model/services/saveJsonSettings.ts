import { ThunkConfig } from "@/app/providers/StoreProvider";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setJsonSettingsMutation } from "../../api/userApi";
import { getJsonSettings } from "../selectors/jsonSettings/jsonSettings";
import { getUserAuthData } from "../selectors/userSelectors/userSelectors";
import { JsonSettings } from "./../types/jsonSettings";

export const saveJsonSettings = createAsyncThunk<
  JsonSettings,
  JsonSettings,
  ThunkConfig<string>
>("user/saveJsonSettings", async (jsonSettings, thunkApi) => {
  const { rejectWithValue, getState, dispatch } = thunkApi;
  const userData = getUserAuthData(getState());
  const currentJsonSettings = getJsonSettings(getState());

  if (!userData) {
    return rejectWithValue("error");
  }

  try {
    const response = await dispatch(
      setJsonSettingsMutation({
        userId: userData.id,
        jsonSettings: {
          ...currentJsonSettings,
          ...jsonSettings,
        },
      })
    ).unwrap();

    if (!response.jsonSettings) {
      return rejectWithValue("error");
    }

    return response.jsonSettings;
  } catch (e) {
    console.log(e);

    return rejectWithValue("error");
  }
});
