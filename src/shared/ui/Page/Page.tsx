import { memo, MutableRefObject, ReactNode, useRef } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import classes from "./Page.module.scss";
import { UseInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page = memo((props: PageProps) => {
  const { className, children, onScrollEnd } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  UseInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  return (
    <section
      ref={wrapperRef}
      className={classNames(classes.Page, {}, [className])}
    >
      {children}
      <div ref={triggerRef} />
    </section>
  );
});
