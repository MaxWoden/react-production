import { StateSchema } from "@/app/providers/StoreProvider";
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from "./getArticleDetails";

describe("getArticleDetails", () => {
  test("should return error", () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error: "error",
      },
    };
    expect(getArticleDetailsError(state as StateSchema)).toEqual("error");
  });

  test("should work with empty state error", () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {},
    };
    expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined);
  });

  test("should work with emty state isLoading", () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {},
    };
    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(undefined);
  });

  test("should return false", () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: { isLoading: false },
    };
    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false);
  });

  test("should return false", () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: { isLoading: true },
    };
    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
  });

  test("should work with emty state data", () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {},
    };
    expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
  });

  test("should return filled state", () => {
    const data = {
      id: "1",
      title: "Title",
    };
    const state: DeepPartial<StateSchema> = {
      articleDetails: { data },
    };
    expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
  });
});
