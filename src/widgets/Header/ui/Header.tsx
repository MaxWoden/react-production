import { useCallback, useState } from "react";
import classes from "./Header.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Modal } from "shared/ui/Modal/Modal";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

interface HeaderProps {
  className?: string;
  needPortal?: boolean;
}

export const Header = ({ className, needPortal }: HeaderProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <header className={classNames(classes.Header, {}, [className])}>
      <Button theme={ButtonTheme.OUTLINE_INVERTED} onClick={onToggleModal}>
        {t("Войти")}
      </Button>
      <Modal
        needPortal={needPortal}
        isOpen={isAuthModal}
        onClose={() => setIsAuthModal(false)}
        children="fuck off"
      />
    </header>
  );
};
