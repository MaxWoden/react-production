import { getUserAuthData } from "@/entities/User";
import { LoginModal } from "@/features/AuthByUsername";
import { AvatarDropdown } from "@/features/avatarDropdown";
import { NotificationButton } from "@/features/notificationButton";
import { getRouteArticleCreate, getRouteMain } from "@/shared/const/router";
import { ToggleFeatures } from "@/shared/features";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "@/shared/ui/deprecated/AppLink";
import { Button, ButtonTheme } from "@/shared/ui/deprecated/Button";
import { HStack } from "@/shared/ui/redesigned/Stack";
import { Text, TextTheme } from "@/shared/ui/deprecated/Text";
import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import classes from "./Header.module.scss";

interface HeaderProps {
  className?: string;
}

export const Header = memo(({ className }: HeaderProps) => {
  const { t } = useTranslation();

  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);

  const onOpenModal = useCallback(() => {
    setIsAuthModal(true);
  }, [setIsAuthModal]);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, [setIsAuthModal]);

  if (authData) {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <HStack
            max
            justify="end"
            className={classNames(classes.HeaderRedesigned, {}, [className])}
          >
            <HStack gap="16">
              <NotificationButton />
              <AvatarDropdown />
            </HStack>
          </HStack>
        }
        off={
          <HStack max className={classNames(classes.Header, {}, [className])}>
            <AppLink className={classes.appName} to={getRouteMain()}>
              <Text theme={TextTheme.INVERTED} title="Woden App" />
            </AppLink>
            <HStack max justify="between">
              <AppLink
                className={classes.createBtn}
                theme={AppLinkTheme.INVERTED_SECONDARY}
                to={getRouteArticleCreate()}
              >
                {t("Создать статью")}
              </AppLink>
              <HStack gap="24">
                <NotificationButton />
                <AvatarDropdown />
              </HStack>
            </HStack>
          </HStack>
        }
      />
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
