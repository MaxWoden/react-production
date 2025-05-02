import { getArticleDetailsData } from "@/entities/Article";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import editIcon from "@/shared/assets/icons/edit.svg";
import { RoutePath } from "@/shared/config/routerConfig/routerConfig";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { Icon } from "@/shared/ui/Icon/Icon";
import { getCanEditArticle } from "../../model/selectors/article";
import classes from "./ArticleDetailsPageHeader.module.scss";
import { HStack } from "@/shared/ui/Stack";

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader = memo(
  (props: ArticleDetailsPageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const navigate = useNavigate();
    const canEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetailsData);

    const onBackToList = useCallback(() => {
      navigate(RoutePath.articles);
    }, [navigate]);

    const onEditArticle = useCallback(() => {
      navigate(`${RoutePath.article_details}${article?.id}/edit`);
    }, [navigate, article?.id]);

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
