import { getUserAuthData, userActions } from "entities/User";
import { LoginModal } from "features/AuthByUsername";
import { memo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import classes from "./Header.module.scss";

interface HeaderProps {
  className?: string;
}

export const Header = memo(({ className }: HeaderProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);

  const onOpenModal = () => {
    setIsAuthModal(true);
  };

  const onCloseModal = () => {
    setIsAuthModal(false);
  };

  const onLogout = () => {
    dispatch(userActions.logout());
  };

  if (authData) {
    return (
      <header className={classNames(classes.Header, {}, [className])}>
        <Button theme={ButtonTheme.OUTLINE_INVERTED} onClick={onLogout}>
          {t("Выйти")}
        </Button>
      </header>
    );
  }

  return (
    <header className={classNames(classes.Header, {}, [className])}>
      <Button theme={ButtonTheme.OUTLINE_INVERTED} onClick={onOpenModal}>
        {t("Войти")}
      </Button>
      {isAuthModal && (
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      )}
    </header>
  );
});
