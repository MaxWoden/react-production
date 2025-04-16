import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { fetchArticlesList } from "./fetchArticlesList";

describe("fetchArticlesList", () => {
  test("error", async () => {
    const thunk = new TestAsyncThunk(fetchArticlesList);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk({});

    expect(result.meta.requestStatus).toBe("rejected");
  });
});
