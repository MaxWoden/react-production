import { ScrollToTopButton } from "@/features/scrollToTopButton";
import { VStack } from "@/shared/ui/redesigned/Stack";
import { memo } from "react";

interface ScrollToolbarProps {
  className?: string;
}

export const ScrollToolbar = memo((props: ScrollToolbarProps) => {
  const { className } = props;

  return (
    <VStack
      className={className}
      justify="center"
      align="center"
      max
      fullHeight
    >
      <ScrollToTopButton />
    </VStack>
  );
});
