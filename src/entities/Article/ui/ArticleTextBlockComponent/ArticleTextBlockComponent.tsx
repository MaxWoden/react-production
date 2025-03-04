import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Text } from "shared/ui/Text/Text";
import { ArticleTextBlock } from "../../model/types/article";
import classes from "./ArticleTextBlockComponent.module.scss";

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
  ({ className, block }: ArticleTextBlockComponentProps) => {
    const { t } = useTranslation();

    return (
      <div
        className={classNames(classes.ArticleImageBlockComponent, {}, [
          className,
        ])}
      >
        {block.title && (
          <Text title={t(block.title)} className={classes.title} />
        )}
        {block.paragraphs.map((paragraph) => (
          <Text
            key={paragraph}
            text={paragraph}
            className={classes.paragraph}
          />
        ))}
      </div>
    );
  }
);
