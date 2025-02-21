import { DeepPartial } from "@reduxjs/toolkit";
import { getCounterValue } from "./getCounterValue";
import { StateSchema } from "app/providers/StoreProvider";

describe("getCounterValue", function () {
  test("should return counter value", function () {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 0 },
    };
    expect(getCounterValue(state as StateSchema)).toEqual(0);
  });
});
