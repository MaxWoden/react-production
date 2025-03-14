import { useTranslation } from "react-i18next";
import classes from "./ArticleCodeBlockComponent.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import { ArticleCodeBlock } from "entities/Article/model/types/article";
import { Code } from "shared/ui/Code/Code";

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
        <Code text={block.code} language={block.language} />
      </div>
    );
  }
);
