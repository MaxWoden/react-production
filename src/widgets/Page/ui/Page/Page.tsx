import { StateSchema } from "@/app/providers/StoreProvider";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
  UseInfiniteScroll,
  UseInfiniteScrollOption,
} from "@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";
import { useInitialEffects } from "@/shared/lib/hooks/useInitialEffects/useInitialsEffects";
import { useThrottle } from "@/shared/lib/hooks/useThrottle/useThrottle";
import { TestProps } from "@/shared/types/tests";
import { memo, ReactNode, RefObject, UIEvent, useRef } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getScrollByPath } from "../../model/selectors/scrollSave";
import { scrollSaveActions } from "../../model/slice/scrollSaveSlice";
import classes from "./Page.module.scss";

interface PageProps extends TestProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page = memo((props: PageProps) => {
  const { className, children, onScrollEnd } = props;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const wrapperRef = useRef(null) as RefObject<HTMLDivElement | null>;
  const triggerRef = useRef(null) as RefObject<HTMLDivElement | null>;
  const scrollPosition = useSelector((state: StateSchema) =>
    getScrollByPath(state, pathname)
  );

  const onScrollHandler = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(
      scrollSaveActions.setScrollPosition({
        path: pathname,
        position: e.currentTarget.scrollTop,
      })
    );
  }, 500);

  const scrollOptions: ScrollToOptions = {
    top: scrollPosition,
  };

  useInitialEffects(() => {
    wrapperRef.current?.scrollTo(scrollOptions);
  });

  UseInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  } as UseInfiniteScrollOption);

  return (
    <main
      id="PAGE_ID"
      data-testid={props["data-testid"] ?? "Page"}
      onScroll={onScrollHandler}
      ref={wrapperRef}
      className={classNames(classes.Page, {}, [className])}
    >
      {children}
      {onScrollEnd ? (
        <div className={classes.trigger} ref={triggerRef} />
      ) : null}
    </main>
  );
});
