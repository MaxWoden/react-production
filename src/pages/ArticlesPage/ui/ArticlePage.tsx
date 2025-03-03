import { useTranslation } from "react-i18next";
import classes from "./ArticlePage.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";

interface ArticlePageProps {
  className?: string;
}

const ArticlePage = ({ className }: ArticlePageProps) => {
  const { t } = useTranslation("article");
  return (
    <div className={classNames(classes.ArticlePage, {}, [className])}>
      Article Page
    </div>
  );
};

export default memo(ArticlePage);
