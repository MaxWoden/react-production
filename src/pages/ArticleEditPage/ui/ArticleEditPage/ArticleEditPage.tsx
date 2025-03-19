import { useTranslation } from "react-i18next";
import { memo } from "react";
import classes from "./ArticleEditPage.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Page } from "widgets/Page";
import { useParams } from "react-router-dom";

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage = (props: ArticleEditPageProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);

  return (
    <Page className={classNames(classes.ArticleEditPage, {}, [className])}>
      {isEdit ? "ArticleEditPage" : "create"}
    </Page>
  );
};

export default memo(ArticleEditPage);
