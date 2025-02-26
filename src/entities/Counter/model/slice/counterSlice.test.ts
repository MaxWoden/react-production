import { counterActions, counterReducer } from "./counterSlice";
import { CounterSchema } from "../types/counterSchema";

describe("counterSlice", function () {
  test("increment", function () {
    const state: CounterSchema = { value: 0 };

    expect(
      counterReducer(state as CounterSchema, counterActions.increment())
    ).toEqual({ value: 1 });
  });

  test("decrement", function () {
    const state: CounterSchema = { value: 0 };

    expect(
      counterReducer(state as CounterSchema, counterActions.decrement())
    ).toEqual({ value: -1 });
  });

  test("state undefined", function () {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({
      value: 1,
    });
  });
});
