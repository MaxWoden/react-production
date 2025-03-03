import { useTranslation } from "react-i18next";
import classes from "./ArticleDetailsPage.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation("article");
  return (
    <div className={classNames(classes.ArticleDetailsPage, {}, [className])}>
      Article Detail
    </div>
  );
};

export default memo(ArticleDetailsPage);
