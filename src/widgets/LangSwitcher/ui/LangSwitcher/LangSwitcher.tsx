import { memo } from "react";
import { useTranslation } from "react-i18next";
import Russia from "shared/assets/icons/russia.svg";
import Uk from "shared/assets/icons/uk.svg";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";
import { HStack } from "shared/ui/Stack";
import classes from "./LangSwitcher.module.scss";

export enum LangSwitcherStyle {
  PRIMARY = "primary",
  INVERTED = "inverted",
}

interface LangSwitcherProps {
  className?: string;
  style?: LangSwitcherStyle;
}

export const LangSwitcher = memo(
  ({ className, style = LangSwitcherStyle.INVERTED }: LangSwitcherProps) => {
    const { i18n } = useTranslation();
    const isLanguageRu = i18n.language === "ru";

    const toggle = async () => {
      i18n.changeLanguage(isLanguageRu ? "en" : "ru");
    };

    const additionalClasses = [classes[style], className];

    return (
      <Button
        onClick={toggle}
        className={classNames(classes.LangSwitcher, {}, additionalClasses)}
      >
        <HStack justify="center">
          {isLanguageRu ? (
            <Russia width={40} height={40} />
          ) : (
            <Uk width={40} height={40} />
          )}
        </HStack>
      </Button>
    );
  }
);
