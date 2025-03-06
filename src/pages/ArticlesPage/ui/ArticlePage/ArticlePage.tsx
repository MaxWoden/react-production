import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import classes from "./ArticlePage.module.scss";

interface ArticlePageProps {
  className?: string;
}

const ArticlePage = ({ className }: ArticlePageProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(classes.ArticlePage, {}, [className])}>
      Article Page
    </div>
  );
};

export default memo(ArticlePage);
