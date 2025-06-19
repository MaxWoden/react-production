import Russia from "@/shared/assets/icons/russia.svg";
import Uk from "@/shared/assets/icons/uk.svg";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button } from "@/shared/ui/Button";
import { HStack } from "@/shared/ui/Stack";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import classes from "./LangSwitcher.module.scss";

interface LangSwitcherProps {
  className?: string;
  inverted?: boolean;
}

export const LangSwitcher = memo(
  ({ className, inverted }: LangSwitcherProps) => {
    const { i18n } = useTranslation();
    const isLanguageRu = i18n.language === "ru";

    const toggle = async () => {
      i18n.changeLanguage(isLanguageRu ? "en" : "ru");
    };

    return (
      <Button
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
      </Button>
    );
  }
);
