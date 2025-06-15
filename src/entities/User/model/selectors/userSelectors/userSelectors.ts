import { StateSchema } from "@/app/providers/StoreProvider";
import { buildSelector } from "@/shared/store";

export const getUserInited = (state: StateSchema) => state?.user._inited;
export const [useUserAuthData, getUserAuthData] = buildSelector(
  (state: StateSchema) => state?.user?.authData
);
