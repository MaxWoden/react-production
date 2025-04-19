import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import CalendarIcon from "shared/assets/icons/calendarIcon.svg";
import EyeIcon from "shared/assets/icons/eyeIcon.svg";
import { RoutePath } from "shared/config/routerConfig/routerConfig";
import { classNames } from "shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffects } from "shared/lib/hooks/useInitialEffects/useInitialsEffects";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Icon } from "shared/ui/Icon/Icon";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { HStack, VStack } from "shared/ui/Stack";
import { Text, TextAlign, TextSize, TextTheme } from "shared/ui/Text/Text";
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from "../../model/selectors/getArticleDetails";
import { fetchArticleById } from "../../model/services/fetchArticleById/fetchArticleById";
import { articleDetailsReducer } from "../../model/slice/articleDetailsSlice";
import { ArticleBlock, ArticleBLockType } from "../../model/types/article";
import { ArticleCodeBlockComponent } from "../../ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import { ArticleImageBlockComponent } from "../ArticleImageBlockComponent/ArticleImageBlockComponent";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import classes from "./ArticleDetails.module.scss";

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

  useInitialEffects(() => dispatch(fetchArticleById(id)));

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
        <HStack max>
          <Avatar
            src={article?.img}
            alt="avatar"
            size={200}
            className={classes.avatar}
          />
        </HStack>
        <VStack gap="8">
          <Text
            size={TextSize.L}
            className={classes.title}
            title={t(`${article?.title}`)}
            text={t(`${article?.subtitle}`)}
          />

          <AppLink to={RoutePath.profile + article?.user.id}>
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
      <VStack gap="32" max className={classNames("", {}, [className])}>
        {content}
      </VStack>
    </DynamicModuleLoader>
  );
});
