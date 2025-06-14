import CalendarIcon from "@/shared/assets/icons/calendarIcon.svg";
import EyeIcon from "@/shared/assets/icons/eyeIcon.svg";
import { getRouteProfile } from "@/shared/const/router";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { AppLink } from "@/shared/ui/AppLink";
import { Avatar } from "@/shared/ui/Avatar";
import { Icon } from "@/shared/ui/Icon";
import { Skeleton } from "@/shared/ui/Skeleton";
import { HStack, VStack } from "@/shared/ui/Stack";
import { Text, TextAlign, TextSize, TextTheme } from "@/shared/ui/Text";
import { memo, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { ArticleBlockType } from "../../model/consts/consts";
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from "../../model/selectors/getArticleDetails";
import { fetchArticleById } from "../../model/services/fetchArticleById/fetchArticleById";
import { articleDetailsReducer } from "../../model/slice/articleDetailsSlice";
import { ArticleBlock } from "../../model/types/article";
import { ArticleCodeBlockComponent } from "../../ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import { ArticleImageBlockComponent } from "../ArticleImageBlockComponent/ArticleImageBlockComponent";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import classes from "./ArticleDetails.module.scss";
import { AppImage } from "@/shared/ui/AppImage";
import ArticleIcon from "@/shared/assets/icons/article.svg";

interface ArticleDetailsProps {
  className?: string;
  articleId: string;
  setArticleNotFound: (flag: boolean) => void;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { className, setArticleNotFound, articleId } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const article = useSelector(getArticleDetailsData);
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);

  useEffect(() => {
    dispatch(fetchArticleById(articleId));
  }, [dispatch, articleId]);

  const renderBLock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.TEXT:
        return (
          <ArticleTextBlockComponent
            key={block.id}
            block={block}
            className={classes.block}
          />
        );
      case ArticleBlockType.CODE:
        return (
          <ArticleCodeBlockComponent
            key={block.id}
            block={block}
            className={classes.block}
          />
        );
      case ArticleBlockType.IMAGE:
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
    setArticleNotFound?.(true);
    content = (
      <Text
        align={TextAlign.CENTER}
        theme={TextTheme.ERROR}
        className={classes.error}
        title={t("Статья не найдена")}
      />
    );
  } else if (article) {
    content = (
      <>
        <HStack max justify="center">
          <AppImage
            src={article?.img}
            alt="Article Image"
            className={classes.articleImage}
            errorFallback={<Icon width={200} height={200} Svg={ArticleIcon} />}
          />
        </HStack>
        <VStack gap="8" max data-testid="ArticleDetails.Info">
          <Text
            size={TextSize.L}
            className={classes.title}
            title={t(`${article?.title}`)}
            text={t(`${article?.subtitle}`)}
          />

          <AppLink to={getRouteProfile(article.user.id)}>
            <HStack gap="16">
              <Avatar size={50} src={article?.user.avatar} />
              <Text text={article?.user.username} />
            </HStack>
          </AppLink>

          <HStack gap="8">
            <Icon Svg={CalendarIcon} className={classes.icon} />
            <Text text={t(`${article?.createdAt}`)} />
          </HStack>
          <HStack gap="8">
            <Icon Svg={EyeIcon} className={classes.icon} />
            <Text text={t(`${article?.views}`)} />
          </HStack>
        </VStack>

        {article?.blocks.map(renderBLock)}
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <VStack justify="center" gap="32" max className={className}>
        {content}
      </VStack>
    </DynamicModuleLoader>
  );
});
