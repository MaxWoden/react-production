import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Text, TextAlign } from "@/shared/ui/deprecated/Text";
import { ArticleImageBlock } from "../../model/types/article";
import classes from "./ArticleImageBlockComponent.module.scss";

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(
  (props: ArticleImageBlockComponentProps) => {
    const { className, block } = props;
    const { t } = useTranslation();

    return (
      <div
        className={classNames(classes.ArticleImageBlockComponent, {}, [
          className,
        ])}
      >
        <img alt={block.title} src={block.src} className={classes.img} />
        {block.title && <Text text={t(block.title)} align={TextAlign.CENTER} />}
      </div>
    );
  }
);
