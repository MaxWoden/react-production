import { LAST_DESIGN_LOCALSTORAGE_KEY } from "@/shared/const/localstorage";
import { FeatureFlags } from "../../types/featureFlags";

const defaultFeatureFlags: FeatureFlags = {
  isAppRedesigned: localStorage.getItem(LAST_DESIGN_LOCALSTORAGE_KEY) === "new",
};

let featureFlags: FeatureFlags = {
  ...defaultFeatureFlags,
};

export const setFeatureFlags = (newFeatureFlags?: FeatureFlags) => {
  if (newFeatureFlags) {
    featureFlags = newFeatureFlags;
  }
};

export const getFeatureFlags = (flag: keyof FeatureFlags) => {
  return featureFlags[flag];
};

export const getAllFeatureFlags = () => {
  return featureFlags;
};
