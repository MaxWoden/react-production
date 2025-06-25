import circleUpIcon from "@/shared/assets/icons/circle-up.svg";
import { Icon } from "@/shared/ui/redesigned/Icon";
import { memo, useCallback } from "react";

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
      className={className}
    />
  );
});
