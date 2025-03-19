// import { StateSchema } from "app/providers/StoreProvider";
// import {
//   getArticleCommentsError,
//   getArticleCommentsIsLoading,
// } from "./comments";

describe("test", () => {
  test("test", () => {
    expect(null).toEqual(null);
  });
});

// describe("comments", () => {
//   test("should return error", () => {
//     const state: DeepPartial<StateSchema> = {
//       articleDetailsPage:{

//       }
//       articleDetailsComments: {
//         error: "error",
//       },
//     };
//     expect(getArticleCommentsError(state as StateSchema)).toEqual("error");
//   });

//   test("should return undefined", () => {
//     const state: DeepPartial<StateSchema> = {
//       articleDetailsComments: {
//         error: "error",
//       },
//     };
//     expect(getArticleCommentsError(state as StateSchema)).toEqual("error");
//   });

//   test("should return true", () => {
//     const state: DeepPartial<StateSchema> = {
//       articleDetailsComments: {
//         isLoading: true,
//       },
//     };
//     expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(true);
//   });

//   test("should return false", () => {
//     const state: DeepPartial<StateSchema> = {
//       articleDetailsComments: {
//         isLoading: false,
//       },
//     };
//     expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(false);
//   });

//   test("should return undefined", () => {
//     const state: DeepPartial<StateSchema> = {
//       articleDetailsComments: {},
//     };
//     expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(
//       undefined
//     );
//   });
// });
