import EyeIcon from "@/shared/assets/icons/eyeIcon.svg";
import ViewIcon from "@/shared/assets/icons/eye.svg";
import { ARTICLE_LIST_ITEM_LOCALSTORAGE_IDX } from "@/shared/const/localstorage";
import { getRouteArticleDetails, getRouteProfile } from "@/shared/const/router";
import { ToggleFeatures, toggleFeatures } from "@/shared/features";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppLink as AppLinkDeprecated } from "@/shared/ui/deprecated/AppLink";
import { Avatar as AvatarDeprecated } from "@/shared/ui/deprecated/Avatar";
import { Card as CardDeprecated } from "@/shared/ui/deprecated/Card";
import { Icon as IconDeprecated } from "@/shared/ui/deprecated/Icon";
import { Skeleton } from "@/shared/ui/deprecated/Skeleton";
import { Text as TextDeprecated } from "@/shared/ui/deprecated/Text";
import { AppImage } from "@/shared/ui/redesigned/AppImage";
import { AppLink as AppLinkRedesigned } from "@/shared/ui/redesigned/AppLink";
import { Avatar as AvatarRedesigned } from "@/shared/ui/redesigned/Avatar";
import { Card as CardRedesigned } from "@/shared/ui/redesigned/Card";
import { Icon as IconRedesigned } from "@/shared/ui/redesigned/Icon";
import { HStack, VStack } from "@/shared/ui/redesigned/Stack";
import { Text as TextRedesigned } from "@/shared/ui/redesigned/Text";
import { HTMLAttributeAnchorTarget, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { ArticleBlockType, ArticleView } from "../../model/consts/consts";
import { Article, ArticleTextBlock } from "../../model/types/article";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import classes from "./ArticleListItem.module.scss";

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

  const AppLink = toggleFeatures({
    name: "isAppRedesigned",
    off: () => AppLinkDeprecated,
    on: () => AppLinkRedesigned,
  });

  const Card = toggleFeatures({
    name: "isAppRedesigned",
    off: () => CardDeprecated,
    on: () => CardRedesigned,
  });

  const Avatar = toggleFeatures({
    name: "isAppRedesigned",
    off: () => AvatarDeprecated,
    on: () => AvatarRedesigned,
  });

  const types = (
    <ToggleFeatures
      feature="isAppRedesigned"
      off={<TextDeprecated text={article.type.join(", ")} />}
      on={<TextRedesigned text={article.type.join(", ")} />}
    />
  );

  const views = (
    <HStack gap="8">
      <ToggleFeatures
        feature="isAppRedesigned"
        off={
          <>
            <TextDeprecated text={String(article.views)} />
            <IconDeprecated Svg={EyeIcon} className={classes.viewsIcon} />
          </>
        }
        on={
          <>
            <IconRedesigned Svg={ViewIcon} width={32} height={32} />
            <TextRedesigned text={String(article.views)} />
          </>
        }
      />
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
                <ToggleFeatures
                  feature="isAppRedesigned"
                  off={<TextDeprecated text={article.user.username} />}
                  on={<TextRedesigned text={article.user.username} />}
                />
              </HStack>
            </AppLink>

            <ToggleFeatures
              feature="isAppRedesigned"
              off={<TextDeprecated text={article.createdAt} />}
              on={<TextRedesigned text={article.createdAt} />}
            />
          </HStack>

          <ToggleFeatures
            feature="isAppRedesigned"
            off={<TextDeprecated text={article.title} />}
            on={<TextRedesigned text={article.title} />}
          />

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
    <ToggleFeatures
      feature="isAppRedesigned"
      off={
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
                  <ToggleFeatures
                    feature="isAppRedesigned"
                    off={<TextDeprecated text={article.createdAt} />}
                    on={<TextRedesigned text={article.createdAt} />}
                  />
                </HStack>
              </div>

              <HStack max justify="between">
                {types}
                {views}
              </HStack>

              <ToggleFeatures
                feature="isAppRedesigned"
                off={
                  <TextDeprecated
                    text={article.title}
                    className={classes.title}
                  />
                }
                on={
                  <TextRedesigned
                    text={article.title}
                    className={classes.title}
                  />
                }
              />
            </VStack>
          </Card>
        </AppLink>
      }
      on={
        <AppLink
          data-testid="ArticleListItem"
          target={target}
          to={getRouteArticleDetails(article.id)}
          className={classNames(classes.ArticleListItem, {}, [
            className,
            classes[view],
          ])}
        >
          <Card className={classes.card} border="partial" padding="0">
            <AppImage
              fallback={<Skeleton width="100%" height={200} />}
              alt={article.title}
              src={article.img}
              className={classes.img}
            />
            <VStack className={classes.info} gap="4">
              <TextRedesigned title={article.title} className={classes.title} />
              <VStack gap="4" className={classes.footer} max>
                <HStack justify="between" max>
                  <TextRedesigned
                    text={article.createdAt}
                    className={classes.date}
                  />
                  {views}
                </HStack>
                <HStack gap="4">
                  <Avatar
                    size={32}
                    src={article.user.avatar}
                    className={classes.avatar}
                  />
                  <TextRedesigned text={article.user.username} />
                </HStack>
              </VStack>
            </VStack>
          </Card>
        </AppLink>
      }
    />
  );
});
