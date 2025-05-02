export type {
  ReduxStoreWithManager,
  StateSchema,
  ThunkConfig,
} from "@/app/providers/StoreProvider/config/StateSchema";
export { createReduxStore, type AppDispatch } from "./config/store";
export { StoreProvider } from "./ui/StoreProvider";
