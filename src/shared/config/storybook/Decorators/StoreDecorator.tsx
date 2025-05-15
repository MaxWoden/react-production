import { StateSchema, StoreProvider } from "@/app/providers/StoreProvider";
import { articleDetailsReducer } from "@/entities/Article";
import { addCommentFormReducer } from "@/features/AddNewComment";
import { loginReducer } from "@/features/AuthByUsername";
import { profileReducer } from "@/features/editableProfileCard";
import { articleDetailsPageReducer } from "@/pages/ArticleDetailsPage";
import { ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { StoryFn } from "@storybook/react";

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsPage: articleDetailsPageReducer,
};

export const StoreDecorator =
  (state?: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
  (Story: StoryFn) =>
    (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        <Story />
      </StoreProvider>
    );
