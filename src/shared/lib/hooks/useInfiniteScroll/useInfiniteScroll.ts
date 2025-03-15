import { MutableRefObject, useEffect } from "react";

export interface UseInfiniteScrollOption {
  callback?: () => void;
  triggerRef: MutableRefObject<HTMLElement>;
  wrapperRef: MutableRefObject<HTMLElement>;
}

export const UseInfiniteScroll = (props: UseInfiniteScrollOption) => {
  const { callback, triggerRef, wrapperRef } = props;

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    const wrapperElement = wrapperRef.current;
    const triggerElement = triggerRef.current;

    if (callback) {
      const options = {
        root: wrapperElement,
        rootMargin: "0px",
        threshold: 1,
      };

      observer = new IntersectionObserver(([entry]) => {
        entry.isIntersecting && callback();
      }, options);

      observer.observe(triggerElement);
    }

    return () => {
      observer && triggerElement && observer.unobserve(triggerElement);
    };
  }, [callback, triggerRef, wrapperRef]);
};
