import circleUpIcon from "@/shared/assets/icons/circle-up.svg";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Icon } from "@/shared/ui/redesigned/Icon";
import { memo, useCallback } from "react";
import classes from "./ScrollToTopButton.module.scss";

interface ScrollToTopButtonProps {
  className?: string;
}

export const ScrollToTopButton = memo((props: ScrollToTopButtonProps) => {
  const { className } = props;

  const onClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Icon
      clickable
      width={32}
      height={32}
      onClick={onClick}
      Svg={circleUpIcon}
      className={classNames(classes.ScrollToTopButton, {}, [className])}
    />
  );
});
