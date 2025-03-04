import { useEffect } from "react";

export const useInitialEffects = (callback: () => void) => {
  useEffect(() => {
    if (__PROJECT__ !== "storybook") {
      callback();
    }
  }, []);
};
