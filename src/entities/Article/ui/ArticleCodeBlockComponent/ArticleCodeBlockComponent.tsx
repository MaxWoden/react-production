import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Code } from "@/shared/ui/Code";
import { ArticleCodeBlock } from "../../model/types/article";
import { VStack } from "@/shared/ui/Stack";

interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo(
  (props: ArticleCodeBlockComponentProps) => {
    const { className, block } = props;

    return (
      <VStack max className={classNames("", {}, [className])}>
        <Code text={block.code} />
      </VStack>
    );
  }
);
