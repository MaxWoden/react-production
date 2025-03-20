import { ArticleCodeBlock } from "entities/Article/model/types/article";
import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Code } from "shared/ui/Code/Code";
import classes from "./ArticleCodeBlockComponent.module.scss";

interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo(
  (props: ArticleCodeBlockComponentProps) => {
    const { className, block } = props;

    return (
      <div
        className={classNames(classes.ArticleImageBlockComponent, {}, [
          className,
        ])}
      >
        <Code text={block.code} />
      </div>
    );
  }
);
