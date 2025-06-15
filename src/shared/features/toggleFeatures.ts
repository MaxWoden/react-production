import { FeatureFlags } from "../types/featureFlags";
import { getFeatureFlags } from "./setGetFeatures";

interface ToggleFeaturesOptions<T> {
  name: keyof FeatureFlags;
  on: () => T;
  off: () => T;
}

export const toggleFeatures = <T>({
  name,
  off,
  on,
}: ToggleFeaturesOptions<T>) => {
  if (getFeatureFlags(name)) {
    return on();
  }

  return off();
};
