import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addCommentFormSchema } from "../types/addCommentForm";

const initialState: addCommentFormSchema = {
  text: "",
  isLoading: false,
  error: undefined,
};

export const addCommentFormSlice = createSlice({
  name: "addCommentForm",
  initialState,
  reducers: {
    setText(state, action: PayloadAction<string>) {
      state.text = action.payload;
    },
  },

  // extraReducers: (builder) => {
  //   builder
  //     .addCase(sendComment.pending, (state) => {
  //       state.isLoading = true;
  //       state.error = undefined;
  //     })
  //     .addCase(sendComment.fulfilled, (state) => {
  //       state.isLoading = false;
  //     })
  //     .addCase(sendComment.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.error = action.payload;
  //     });
  // },
});

export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
