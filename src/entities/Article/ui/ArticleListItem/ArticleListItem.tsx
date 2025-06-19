import EyeIcon from "@/shared/assets/icons/eyeIcon.svg";
import { ARTICLE_LIST_ITEM_LOCALSTORAGE_IDX } from "@/shared/const/localstorage";
import { getRouteArticleDetails, getRouteProfile } from "@/shared/const/router";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppLink } from "@/shared/ui/deprecated/AppLink";
import { Avatar } from "@/shared/ui/deprecated/Avatar";
import { Card } from "@/shared/ui/deprecated/Card";
import { Icon } from "@/shared/ui/deprecated/Icon";
import { HStack, VStack } from "@/shared/ui/deprecated/Stack";
import { Text } from "@/shared/ui/deprecated/Text";
import { HTMLAttributeAnchorTarget, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { ArticleBlockType, ArticleView } from "../../model/consts/consts";
import { Article, ArticleTextBlock } from "../../model/types/article";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import classes from "./ArticleListItem.module.scss";
import { AppImage } from "@/shared/ui/deprecated/AppImage";
import { Skeleton } from "@/shared/ui/deprecated/Skeleton";

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
  index?: number;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const { className, article, view, target, index } = props;
  const { t } = useTranslation();

  const handleButtonClick = useCallback(() => {
    sessionStorage.setItem(
      ARTICLE_LIST_ITEM_LOCALSTORAGE_IDX,
      JSON.stringify(index)
    );
  }, [index]);

  const pathToAuthor = getRouteProfile(article.user.id);
  const pathToArticle = getRouteArticleDetails(article.id);

  const types = <Text text={article.type.join(", ")} />;

  const views = (
    <HStack gap="8">
      <Text text={String(article.views)} />
      <Icon Svg={EyeIcon} className={classes.viewsIcon} />
    </HStack>
  );

  if (view === ArticleView.LIST) {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockType.TEXT
    ) as ArticleTextBlock;

    const additionalClasses = [className, classes[view]];

    return (
      <Card
        data-testid="ArticleListItem"
        className={classNames("", {}, additionalClasses)}
      >
        <VStack gap="8">
          <HStack max justify="between">
            <AppLink target={target} to={pathToAuthor}>
              <HStack gap="8">
                <Avatar src={article.user.avatar} />
                <Text text={article.user.username} />
              </HStack>
            </AppLink>

            <Text text={article.createdAt} />
          </HStack>

          <Text text={article.title} />

          <VStack gap="32">
            {types}

            <AppImage
              fallback={<Skeleton width="100%" height={250} />}
              alt={article.title}
              src={article.img}
              className={classes.img}
            />

            {textBlock && (
              <ArticleTextBlockComponent
                block={textBlock}
                className={classes.textBlock}
              />
            )}

            <HStack max justify="between">
              <AppLink
                onClick={handleButtonClick}
                target={target}
                className={classes.articleLink}
                to={pathToArticle}
              >
                {t("Читать далее")}...
              </AppLink>
              {views}
            </HStack>
          </VStack>
        </VStack>
      </Card>
    );
  }

  return (
    <AppLink
      data-testid="ArticleListItem"
      onClick={handleButtonClick}
      target={target}
      className={classNames(classes.ArticleListItem, {}, [
        className,
        classes[view],
      ])}
      to={pathToArticle}
    >
      <Card>
        <VStack gap="8">
          <div className={classes.imageWrapper}>
            <AppImage
              fallback={<Skeleton width={200} height={200} />}
              alt={article.title}
              src={article.img}
              className={classes.img}
            />
            <HStack max justify="between" className={classes.top}>
              <AppLink
                target={target}
                onClick={(e) => e.stopPropagation()}
                to={pathToAuthor}
              >
                {article.user.username}
              </AppLink>
              <Text text={article.createdAt} />
            </HStack>
          </div>

          <HStack max justify="between">
            {types}
            {views}
          </HStack>

          <Text text={article.title} className={classes.title} />
        </VStack>
      </Card>
    </AppLink>
  );
});
