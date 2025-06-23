import { FeatureFlags } from "../../types/featureFlags";

let featureFlags: FeatureFlags = {};

export const setFeatureFlags = (newFeatureFlags?: FeatureFlags) => {
  if (newFeatureFlags) {
    featureFlags = newFeatureFlags;
  }
};

export const getFeatureFlags = (flag: keyof FeatureFlags) => {
  return featureFlags[flag] ?? true;
};

export const getAllFeatureFlags = () => {
  return featureFlags;
};
