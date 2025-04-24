import { memo } from "react";
import { useParams } from "react-router-dom";
import { Page } from "widgets/Page";

const ArticleEditPage = () => {
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);

  return <Page>{isEdit ? "ArticleEditPage" : "create"}</Page>;
};

export default memo(ArticleEditPage);
