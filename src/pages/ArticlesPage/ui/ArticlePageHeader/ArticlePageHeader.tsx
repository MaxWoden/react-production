import { ArticleView } from "entities/Article";
import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Select, SelectOption } from "shared/ui/Select/Select";
import { ArticleViewSwitcher } from "widgets/ArticleViewSwitcher";
import { articlesPageActions } from "../../model/slice/articlesPageSlice";
import classes from "./ArticlePageHeader.module.scss";

interface ArticlePageHeaderProps {
  className?: string;
  view: ArticleView;
}

const options: SelectOption[] = [
  { value: "new", content: "new" },
  { value: "old", content: "old" },
  { value: "popular", content: "popular" },
  { value: "unpopular", content: "unpopular" },
];

export const ArticlePageHeader = memo((props: ArticlePageHeaderProps) => {
  const { className, view } = props;
  const dispatch = useAppDispatch();

  const onViewClick = (articleView: ArticleView) => {
    dispatch(articlesPageActions.setView(articleView));
  };

  return (
    <div className={classNames(classes.ArticlePageHeader, {}, [className])}>
      <Select options={options}></Select>
      <ArticleViewSwitcher onViewClick={onViewClick} view={view} />
    </div>
  );
});
