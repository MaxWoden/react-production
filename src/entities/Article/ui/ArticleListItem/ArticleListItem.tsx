import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import EyeIcon from "shared/assets/icons/eyeIcon.svg";
import { classNames } from "shared/lib/classNames/classNames";
import { useHover } from "shared/lib/hooks/useHover/useHover";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Card } from "shared/ui/Card/Card";
import { Icon } from "shared/ui/Icon/Icon";
import { Text } from "shared/ui/Text/Text";
import {
  Article,
  ArticleBLockType,
  ArticleTextBlock,
  ArticleView,
} from "../../model/types/article";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import classes from "./ArticleListItem.module.scss";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routerConfig/routerConfig";

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const { className, article, view } = props;
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isHover, bindHover] = useHover();

  const onOpenArticle = useCallback(() => {
    navigate(article.id);
  }, [navigate, article.id]);

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
    const textBLock = article.blocks.find(
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
              to={RoutePath.profile + article.user.id}
              className={classes.author}
            >
              <Avatar size={50} src={article.user.avatar} />
              <Text text={article.user.username} className={classes.username} />
            </AppLink>
            <Text text={article.createdAt} className={classes.date} />
          </div>

          <Text text={article.title} className={classes.title} />
          {types}

          <img alt={article.title} src={article.img} className={classes.img} />

          {textBLock && (
            <ArticleTextBlockComponent
              block={textBLock}
              className={classes.textBlock}
            />
          )}

          <div className={classes.footer}>
            <Button onClick={onOpenArticle} theme={ButtonTheme.OUTLINE}>
              {t("Читать далее")}...{" "}
            </Button>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div
      {...bindHover}
      onClick={onOpenArticle}
      className={classNames(classes.ArticleListItem, {}, [
        className,
        classes[view],
      ])}
    >
      <Card>
        <div className={classes.imageWrapper}>
          <img alt={article.title} src={article.img} className={classes.img} />
          <AppLink
            onClick={(e) => e.stopPropagation()}
            to={RoutePath.profile + article.user.id}
            className={classes.author}
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
    </div>
  );
});
