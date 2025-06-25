import {
  LAST_DESIGN_LOCALSTORAGE_KEY,
  USER_LOCALSTORAGE_KEY,
} from "@/shared/const/localstorage";
import { setFeatureFlags } from "@/shared/features";
import { buildSlice } from "@/shared/store/buildSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { initAuthData } from "../services/initAuthData";
import { saveJsonSettings } from "../services/saveJsonSettings";
import { JsonSettings } from "../types/jsonSettings";
import { User, UserSchema } from "../types/user";

const initialState: UserSchema = {
  _inited: false,
};

export const userSlice = buildSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthData: (state, { payload }: PayloadAction<User>) => {
      state.authData = payload;
      setFeatureFlags(payload.features);
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(payload.id));
      localStorage.setItem(
        LAST_DESIGN_LOCALSTORAGE_KEY,
        payload.features?.isAppRedesigned ? "new" : "old"
      );
    },
    logout: (state) => {
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
      state.authData = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      saveJsonSettings.fulfilled,
      (state, { payload }: PayloadAction<JsonSettings>) => {
        if (state.authData) {
          state.authData.jsonSettings = payload;
        }
      }
    );
    builder.addCase(
      initAuthData.fulfilled,
      (state, { payload }: PayloadAction<User>) => {
        state.authData = payload;
        setFeatureFlags(payload.features);
        state._inited = true;
      }
    );
    builder.addCase(initAuthData.rejected, (state) => {
      state._inited = true;
    });
  },
});

export const {
  actions: userActions,
  reducer: userReducer,
  useActions: useUserActions,
} = userSlice;
