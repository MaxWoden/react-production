import { TestAsyncThunk } from "@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { addCommentForArticle } from "./addCommentForArticle";

describe("addCommentForArticle", () => {
  test("error", async () => {
    const thunk = new TestAsyncThunk(addCommentForArticle);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk("1");

    expect(result.meta.requestStatus).toBe("rejected");
  });
});
