import { ToggleFeatures } from "@/shared/features";
import { classNames } from "@/shared/lib/classNames/classNames";
import {
  TextAlign,
  Text as TextDeprecated,
  TextSize,
} from "@/shared/ui/deprecated/Text";
import { Text as TextRedesigned } from "@/shared/ui/redesigned/Text";
import { Page } from "@/widgets/Page";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import classes from "./NotFoundPage.module.scss";

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = memo(({ className }: NotFoundPageProps) => {
  const { t } = useTranslation();
  return (
    <Page
      data-testid="NotFoundPage"
      className={classNames(classes.NotFoundPage, {}, [className])}
    >
      <ToggleFeatures
        on={
          <TextDeprecated
            align={TextAlign.CENTER}
            size={TextSize.L}
            title="404"
            text={t("Страница не найдена")}
          />
        }
        off={
          <TextRedesigned
            align="center"
            size="l"
            title="404"
            text={t("Страница не найдена")}
          />
        }
        feature={"isProfileRatingEnabled"}
      />
    </Page>
  );
});
