import { ArticleDetails } from "entities/Article";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import classes from "./ArticleDetailsPage.module.scss";

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation("article");
  const { id } = useParams<{ id: string }>();

  if (!id)
    return (
      <div className={classNames(classes.ArticleDetailsPage, {}, [className])}>
        {t("Статья не найдена")}
      </div>
    );

  return (
    <div className={classNames(classes.ArticleDetailsPage, {}, [className])}>
      <ArticleDetails id={id} />
    </div>
  );
};

export default memo(ArticleDetailsPage);
