import editIcon from "@/shared/assets/icons/edit.svg";
import { getRouteArticleEdit, getRouteArticles } from "@/shared/const/router";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "@/shared/ui/deprecated/Button";
import { Icon } from "@/shared/ui/deprecated/Icon";
import { HStack } from "@/shared/ui/redesigned/Stack";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCanEditArticle } from "../../model/selectors/article";
import classes from "./ArticleDetailsPageHeader.module.scss";

interface ArticleDetailsPageHeaderProps {
  className?: string;
  articleId: string;
}

export const ArticleDetailsPageHeader = memo(
  (props: ArticleDetailsPageHeaderProps) => {
    const { className, articleId } = props;
    const { t } = useTranslation();

    const navigate = useNavigate();
    const canEdit = useSelector(getCanEditArticle);

    const onBackToList = useCallback(() => {
      navigate(getRouteArticles());
    }, [navigate]);

    const onEditArticle = useCallback(() => {
      navigate(getRouteArticleEdit(articleId));
    }, [navigate, articleId]);

    return (
      <HStack max justify="between" className={className}>
        <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
          {t("Все статьи")}
        </Button>

        {canEdit && (
          <Button onClick={onEditArticle} theme={ButtonTheme.OUTLINE}>
            <HStack gap="8">
              <Icon
                Svg={editIcon}
                className={classNames(classes.icon, {}, [classes.editIcon])}
              />
              {t("Редактировать")}
            </HStack>
          </Button>
        )}
      </HStack>
    );
  }
);
