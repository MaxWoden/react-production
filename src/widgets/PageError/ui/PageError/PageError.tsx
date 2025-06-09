import { classNames } from "@/shared/lib/classNames/classNames";
import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { Refresher, RefresherTheme } from "@/shared/ui/Refresher/Refresher";
import { HStack, VStack } from "@/shared/ui/Stack";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import classes from "./PageError.module.scss";

interface PageErrorProps {
  className?: string;
}

export const PageError = memo(({ className }: PageErrorProps) => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={classNames("app", {}, [theme])}>
      <VStack
        gap="32"
        max
        justify="center"
        align="center"
        className={classNames(classes.PageError, {}, [className])}
      >
        <h1>{t("Произошла непредвиденная ошибка")}</h1>
        <Button
          theme={ButtonTheme.CLEAR}
          className={classes.btnWrapper}
          onClick={reloadPage}
        >
          <HStack className={classes.btn} justify="center">
            {t("Обновить страницу")}
            <Refresher theme={RefresherTheme.INVERTED} />
          </HStack>
        </Button>
      </VStack>
    </div>
  );
});
