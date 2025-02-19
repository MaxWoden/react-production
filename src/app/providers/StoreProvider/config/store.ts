import { configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { counterReducer } from "entities/Counter";

export function createReduxStore(initialState?: StateSchema) {
  const store = {
    reducer: { counter: counterReducer },
    preloadedState: initialState,
  };

  return configureStore<StateSchema>(store);
}
