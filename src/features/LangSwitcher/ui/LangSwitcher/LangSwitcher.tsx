import Russia from "@/shared/assets/icons/russia.svg";
import Uk from "@/shared/assets/icons/uk.svg";
import { ToggleFeatures } from "@/shared/features";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button as ButtonDeprecated } from "@/shared/ui/deprecated/Button";
import { HStack } from "@/shared/ui/deprecated/Stack";
import { Button } from "@/shared/ui/redesigned/Button";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import classes from "./LangSwitcher.module.scss";

interface LangSwitcherProps {
  className?: string;
  inverted?: boolean;
  short?: boolean;
}

export const LangSwitcher = memo(
  ({ className, inverted, short }: LangSwitcherProps) => {
    const { i18n, t } = useTranslation();
    const isLanguageRu = i18n.language === "ru";

    const toggle = async () => {
      i18n.changeLanguage(isLanguageRu ? "en" : "ru");
    };

    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        off={
          <ButtonDeprecated
            onClick={toggle}
            className={classNames(
              classes.LangSwitcher,
              { [classes.inverted]: inverted },
              [className]
            )}
          >
            <HStack justify="center">
              {isLanguageRu ? (
                <Russia width={40} height={40} />
              ) : (
                <Uk width={40} height={40} />
              )}
            </HStack>
          </ButtonDeprecated>
        }
        on={
          <Button
            onClick={toggle}
            className={classNames(classes.LangSwitcherRedesigned, {}, [
              className,
            ])}
            variant="clear"
          >
            {short ? t("Короткий язык") : t("Язык")}
          </Button>
        }
      />
    );
  }
);
