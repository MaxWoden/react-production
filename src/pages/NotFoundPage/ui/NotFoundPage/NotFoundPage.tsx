import { useTranslation } from "react-i18next";
import classes from "./NotFoundPage.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = memo(({ className }: NotFoundPageProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(classes.NotFoundPage, {}, [className])}>
      <h1>404</h1>
      <h2>{t("Страница не найдена")}</h2>
    </div>
  );
});
