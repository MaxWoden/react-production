import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import CalendarIcon from "shared/assets/icons/calendarIcon.svg";
import EyeIcon from "shared/assets/icons/eyeIcon.svg";
import { classNames } from "shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffects } from "shared/lib/hooks/useInitialEffects/useInitialsEffects";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Icon } from "shared/ui/Icon/Icon";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { Text, TextAlign, TextSize, TextTheme } from "shared/ui/Text/Text";
import { fetchArticleById } from "../../model/services/fetchArticleById/fetchArticleById";
import { articleDetailsReducer } from "../../model/slice/articleDetailsSlice";
import { ArticleBlock, ArticleBLockType } from "../../model/types/article";
import { ArticleCodeBlockComponent } from "../ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import { ArticleImageBlockComponent } from "../ArticleImageBlockComponent/ArticleImageBlockComponent";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import classes from "./ArticleDetails.module.scss";
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from "../../model/selectors/getArticleDetails";

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { className, id } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const article = useSelector(getArticleDetailsData);
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);

  const renderBLock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBLockType.TEXT:
        return (
          <ArticleTextBlockComponent
            key={block.id}
            block={block}
            className={classes.block}
          />
        );
      case ArticleBLockType.CODE:
        return (
          <ArticleCodeBlockComponent
            key={block.id}
            block={block}
            className={classes.block}
          />
        );
      case ArticleBLockType.IMAGE:
        return (
          <ArticleImageBlockComponent
            key={block.id}
            block={block}
            className={classes.block}
          />
        );
      default:
        return null;
    }
  }, []);

  useInitialEffects(() => dispatch(fetchArticleById(id)));

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton
          className={classes.avatar}
          width={200}
          height={200}
          border={"50%"}
        />
        <Skeleton className={classes.title} width={300} height={32} />
        <Skeleton className={classes.skeleton} width={600} height={24} />
        <Skeleton className={classes.skeleton} width={"100%"} height={200} />
        <Skeleton className={classes.skeleton} width={"100%"} height={200} />
      </>
    );
  } else if (error) {
    content = (
      <Text
        align={TextAlign.CENTER}
        theme={TextTheme.ERROR}
        title={t("Статья не найдена")}
      />
    );
  } else {
    content = (
      <>
        <div className={classes.avatarWrapper}>
          <Avatar
            src={article?.img}
            alt="avatar"
            size={200}
            className={classes.avatar}
          />
        </div>
        <Text
          size={TextSize.L}
          className={classes.title}
          title={t(`${article?.title}`)}
          text={t(`${article?.subtitle}`)}
        />
        <div className={classes.articleInfo}>
          <Icon Svg={EyeIcon} className={classes.icon} />
          <Text text={t(`${article?.views}`)} />
        </div>
        <div className={classes.articleInfo}>
          <Icon Svg={CalendarIcon} className={classes.icon} />
          <Text text={t(`${article?.createdAt}`)} />
        </div>
        {article?.blocks.map(renderBLock)}
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(classes.ArticleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  );
});
