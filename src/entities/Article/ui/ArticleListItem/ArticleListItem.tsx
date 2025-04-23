import { HTMLAttributeAnchorTarget, memo } from "react";
import { useTranslation } from "react-i18next";
import EyeIcon from "shared/assets/icons/eyeIcon.svg";
import { RoutePath } from "shared/config/routerConfig/routerConfig";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Card } from "shared/ui/Card/Card";
import { Icon } from "shared/ui/Icon/Icon";
import { HStack, VStack } from "shared/ui/Stack";
import { Text } from "shared/ui/Text/Text";
import {
  Article,
  ArticleBlockType,
  ArticleTextBlock,
  ArticleView,
} from "../../model/types/article";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import classes from "./ArticleListItem.module.scss";

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const { className, article, view, target } = props;
  const { t } = useTranslation();

  const pathToAuthor = RoutePath.profile + article.user.id;
  const pathToArticle = RoutePath.article_details + article.id;

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
      <Card className={classNames("", {}, additionalClasses)}>
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

            <img
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
            <img
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
