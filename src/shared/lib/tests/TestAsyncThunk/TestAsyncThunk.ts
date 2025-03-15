import { AsyncThunkAction } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import axios, { AxiosStatic } from "axios";

type ActionCreatorType<Return, Arg, RejectedValue> = (
  arg: Arg
) => AsyncThunkAction<
  Return,
  Arg,
  {
    rejectValue: RejectedValue;
  }
>;

jest.mock("axios");
const mockedAxios = jest.mocked(axios, true);

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: jest.Mocked<any>;
  getState: () => StateSchema;

  api: jest.MockedFunctionDeep<AxiosStatic>;

  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

  constructor(
    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>,
    state?: DeepPartial<StateSchema>
  ) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn();
    this.api = mockedAxios;

    this.getState = jest.fn(() => state as StateSchema);
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    const result = await action(this.dispatch, this.getState, {
      api: this.api,
    });

    return result;
  }
}
