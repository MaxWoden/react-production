import { useTranslation } from "react-i18next";
import classes from "./LangSwitcher.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";
import Russia from "shared/assets/icons/russia.svg";
import Uk from "shared/assets/icons/uk.svg";

export enum LangSwitcherStyle {
  PRIMARY = "primary",
  INVERTED = "inverted",
}

interface LangSwitcherProps {
  className?: string;
  style?: LangSwitcherStyle;
}

export const LangSwitcher = ({
  className,
  style = LangSwitcherStyle.INVERTED,
}: LangSwitcherProps) => {
  const { i18n } = useTranslation();
  const isLanguageRu = i18n.language === "ru";

  const toggle = async () => {
    i18n.changeLanguage(isLanguageRu ? "en" : "ru");
  };

  return (
    <Button
      onClick={toggle}
      className={classNames(classes.LangSwitcher, {}, [
        classes[style],
        className,
      ])}
    >
      {isLanguageRu ? (
        <Russia width={40} height={40} />
      ) : (
        <Uk width={40} height={40} />
      )}
    </Button>
  );
};
