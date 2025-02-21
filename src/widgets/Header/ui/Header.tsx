import { useCallback, useState } from "react";
import classes from "./Header.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Modal } from "shared/ui/Modal/Modal";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { LoginModal } from "features/AuthByUsername";

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onOpenModal = () => {
    setIsAuthModal(true);
  };

  const onCloseModal = () => {
    setIsAuthModal(false);
  };

  return (
    <header className={classNames(classes.Header, {}, [className])}>
      <Button theme={ButtonTheme.OUTLINE_INVERTED} onClick={onOpenModal}>
        {t("Войти")}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </header>
  );
};
