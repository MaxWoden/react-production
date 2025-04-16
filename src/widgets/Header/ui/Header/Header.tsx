import { getUserAuthData, userActions } from "entities/User";
import { LoginModal } from "features/AuthByUsername";
import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import classes from "./Header.module.scss";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routerConfig/routerConfig";
import { HStack } from "shared/ui/Stack";

interface HeaderProps {
  className?: string;
}

export const Header = memo(({ className }: HeaderProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);

  const onOpenModal = useCallback(() => {
    setIsAuthModal(true);
  }, [setIsAuthModal]);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, [setIsAuthModal]);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <HStack className={classNames(classes.Header, {}, [className])}>
        <Text
          className={classes.appName}
          theme={TextTheme.INVERTED}
          title={"Woden App"}
        />
        <AppLink
          className={classes.createBtn}
          theme={AppLinkTheme.INVERTED_SECONDARY}
          to={RoutePath.article_create}
        >
          {t("Создать статью")}
        </AppLink>
        <Button
          className={classes.profileInfo}
          theme={ButtonTheme.OUTLINE_INVERTED}
          onClick={onLogout}
        >
          {t("Выйти")}
        </Button>
      </HStack>
    );
  }

  return (
    <HStack className={classNames(classes.Header, {}, [className])}>
      <Text
        className={classes.appName}
        theme={TextTheme.INVERTED}
        title={"Woden App"}
      />
      <Button
        className={classes.profileInfo}
        theme={ButtonTheme.OUTLINE_INVERTED}
        onClick={onOpenModal}
      >
        {t("Войти")}
      </Button>
      {isAuthModal && (
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      )}
    </HStack>
  );
});
