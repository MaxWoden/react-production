import { StateSchema } from "app/providers/StoreProvider";

export const getAddCommentFormError = (state: StateSchema) =>
  state?.addCommentForm?.error;
export const getAddCommentFormIsLoading = (state: StateSchema) =>
  state?.addCommentForm?.isLoading;
export const getAddCommentFormText = (state: StateSchema) =>
  state?.addCommentForm?.text;
