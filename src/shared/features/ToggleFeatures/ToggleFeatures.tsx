import { FeatureFlags } from "@/shared/types/featureFlags";
import { ReactElement } from "react";
import { getFeatureFlags } from "../setGetFeatures";

interface ToggleFeaturesProps {
  feature: keyof FeatureFlags;
  on: ReactElement;
  off: ReactElement;
}

export const ToggleFeatures = (props: ToggleFeaturesProps) => {
  const { on, off, feature } = props;

  if (getFeatureFlags(feature)) {
    return on;
  }

  return off;
};
