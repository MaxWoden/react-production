import { memo } from "react";
import { useParams } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { Page } from "widgets/Page";
import classes from "./ArticleEditPage.module.scss";

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage = (props: ArticleEditPageProps) => {
  const { className } = props;
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);

  return (
    <Page className={classNames(classes.ArticleEditPage, {}, [className])}>
      {isEdit ? "ArticleEditPage" : "create"}
    </Page>
  );
};

export default memo(ArticleEditPage);
