import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions,
} from "entities/User";
import { LoginModal } from "features/AuthByUsername";
import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { RoutePath } from "shared/config/routerConfig/routerConfig";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Dropdown } from "shared/ui/Dropdown/Dropdown";
import { HStack } from "shared/ui/Stack";
import { Text, TextTheme } from "shared/ui/Text/Text";
import classes from "./Header.module.scss";

interface HeaderProps {
  className?: string;
}

export const Header = memo(({ className }: HeaderProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);

  const isAdminPanelAvailable = isAdmin || isManager;

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
      <HStack max className={classNames(classes.Header, {}, [className])}>
        <AppLink className={classes.appName} to={RoutePath.main}>
          <Text theme={TextTheme.INVERTED} title="Woden App" />
        </AppLink>
        <HStack max justify="between">
          <AppLink
            className={classes.createBtn}
            theme={AppLinkTheme.INVERTED_SECONDARY}
            to={RoutePath.article_create}
          >
            {t("Создать статью")}
          </AppLink>
          <Dropdown
            items={[
              ...(isAdminPanelAvailable
                ? [
                    {
                      content: t("Админка"),
                      href: RoutePath.admin_panel,
                    },
                  ]
                : []),
              { content: t("Профиль"), href: RoutePath.profile + authData?.id },
              { content: t("Выйти"), onClick: onLogout },
            ]}
            trigger={<Avatar size={50} src={authData.avatar} />}
          />
        </HStack>
      </HStack>
    );
  }

  return (
    <HStack
      max
      justify="between"
      className={classNames(classes.Header, {}, [className])}
    >
      <Text
        className={classes.appName}
        theme={TextTheme.INVERTED}
        title={"Woden App"}
      />
      <Button theme={ButtonTheme.OUTLINE_INVERTED} onClick={onOpenModal}>
        {t("Войти")}
      </Button>
      {isAuthModal && (
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      )}
    </HStack>
  );
});
