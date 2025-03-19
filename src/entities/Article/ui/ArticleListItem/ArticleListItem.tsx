import { HTMLAttributeAnchorTarget, memo } from "react";
import { useTranslation } from "react-i18next";
import EyeIcon from "shared/assets/icons/eyeIcon.svg";
import { RoutePath } from "shared/config/routerConfig/routerConfig";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Card } from "shared/ui/Card/Card";
import { Icon } from "shared/ui/Icon/Icon";
import { Text } from "shared/ui/Text/Text";
import {
  Article,
  ArticleBLockType,
  ArticleTextBlock,
  ArticleView,
} from "../../model/types/article";
import classes from "./ArticleListItem.module.scss";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";

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
  const types = (
    <Text text={article.type.join(", ")} className={classes.types} />
  );

  const views = (
    <>
      <Text text={String(article.views)} className={classes.views} />
      <Icon Svg={EyeIcon} className={classes.viewsIcon} />
    </>
  );

  if (view === ArticleView.LIST) {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBLockType.TEXT
    ) as ArticleTextBlock;

    return (
      <div
        className={classNames(classes.ArticleListItem, {}, [
          className,
          classes[view],
        ])}
      >
        <Card>
          <div className={classes.header}>
            <AppLink
              target={target}
              to={pathToAuthor}
              className={classes.author}
            >
              <Avatar src={article.user.avatar} />
              <Text text={article.user.username} className={classes.username} />
            </AppLink>

            <Text text={article.createdAt} className={classes.date} />
          </div>

          <Text text={article.title} className={classes.title} />
          {types}

          <img alt={article.title} src={article.img} className={classes.img} />

          {textBlock && (
            <ArticleTextBlockComponent
              block={textBlock}
              className={classes.textBlock}
            />
          )}

          <div className={classes.footer}>
            <AppLink
              target={target}
              className={classes.articleLink}
              to={pathToArticle}
            >
              {t("Читать далее")}...
            </AppLink>
            {views}
          </div>
        </Card>
      </div>
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
        <div className={classes.imageWrapper}>
          <img alt={article.title} src={article.img} className={classes.img} />
          <AppLink
            target={target}
            onClick={(e) => e.stopPropagation()}
            to={pathToAuthor}
            className={classes.authorLink}
          >
            {article.user.username}
          </AppLink>
          <Text text={article.createdAt} className={classes.date} />
        </div>
        <div className={classes.infoWrapper}>
          {types}
          {views}
        </div>
        <Text text={article.title} className={classes.title} />
      </Card>
    </AppLink>
  );
});
