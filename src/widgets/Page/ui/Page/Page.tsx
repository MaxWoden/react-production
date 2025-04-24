import { StateSchema } from "app/providers/StoreProvider";
import { memo, MutableRefObject, ReactNode, UIEvent, useRef } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { UseInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";
import { useInitialEffects } from "shared/lib/hooks/useInitialEffects/useInitialsEffects";
import { useThrottle } from "shared/lib/hooks/useThrottle/useThrottle";
import { getScrollByPath } from "../../model/selectors/scrollSave";
import { scrollSaveActions } from "../../model/slice/scrollSaveSlice";
import classes from "./Page.module.scss";

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page = memo((props: PageProps) => {
  const { className, children, onScrollEnd } = props;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
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
    wrapperRef.current.scrollTo(scrollOptions);
  });

  UseInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  return (
    <main
      id="PAGE_ID"
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
