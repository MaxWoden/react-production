import { setFeatureFlags } from "@/shared/features";
import { getAllFeatureFlags } from "@/shared/features/lib/setGetFeatures";
import { Decorator } from "@storybook/react";

export const NewDesignDecorator: Decorator = (StoryComponent) => {
  setFeatureFlags({ ...getAllFeatureFlags(), isAppRedesigned: true });
  return (
    <div className="app_redesigned">
      <StoryComponent />
    </div>
  );
};
