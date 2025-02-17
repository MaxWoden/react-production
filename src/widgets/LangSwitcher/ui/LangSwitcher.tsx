import { useTranslation } from "react-i18next";
import classes from "./LangSwitcher.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";
import ru from "shared/assets/icons/russia.png";
import uk from "shared/assets/icons/united-kingdom.png";

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
  style = LangSwitcherStyle.PRIMARY,
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
      <img src={isLanguageRu ? ru : uk} height={40} width={40} alt="Language" />
    </Button>
  );
};
