import { MutableRefObject, useCallback, useRef } from "react";

export const useDebounce = (
  callback: (...args: any[]) => void,
  delay: number
) => {
  const timer = useRef() as MutableRefObject<any>;

  return useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => {
      callback();
    }, delay);
  }, [callback, delay]);
};
