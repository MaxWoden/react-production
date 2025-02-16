import { useTranslation } from "react-i18next";
import classes from "./PageError.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";
import { Refresher } from "shared/ui/Refresher/Refresher";
import { useTheme } from "app/providers/ThemeProvider";

interface PageErrorProps {
  className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const reloadPage = () => {
    location.reload();
  };

  console.log(`theme is ${theme}`);

  return (
    <div className={classNames("app", {}, [theme])}>
      <div className={classNames(classes.PageError, {}, [className])}>
        <h1>{t("Произошла непредвиденная ошибка")}</h1>
        <Button className={classes.button} onClick={reloadPage}>
          {t("Обновить страницу")}
          <Refresher />
        </Button>
      </div>
    </div>
  );
};
