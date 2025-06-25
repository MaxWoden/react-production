import { setFeatureFlags } from "@/shared/features";
import { FeatureFlags } from "@/shared/types/featureFlags";

export const FeaturesFlagsDecorator =
  (features: FeatureFlags) => (StoryComponent: any) => {
    setFeatureFlags(features);
    return <StoryComponent />;
  };
