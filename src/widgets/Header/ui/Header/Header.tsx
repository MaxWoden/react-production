import { getUserAuthData } from "@/entities/User";
import { LoginModal } from "@/features/AuthByUsername";
import { AvatarDropdown } from "@/features/avatarDropdown";
import { NotificationButton } from "@/features/notificationButton";
import { getRouteArticleCreate, getRouteMain } from "@/shared/const/router";
import { ToggleFeatures } from "@/shared/features";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button } from "@/shared/ui/redesigned/Button";
import {
  AppLink as AppLinkDeprecated,
  AppLinkTheme,
} from "@/shared/ui/deprecated/AppLink";
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from "@/shared/ui/deprecated/Button";
import { HStack } from "@/shared/ui/redesigned/Stack";
import { Text as TextDeprecated, TextTheme } from "@/shared/ui/deprecated/Text";
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
            <AppLinkDeprecated className={classes.appName} to={getRouteMain()}>
              <TextDeprecated theme={TextTheme.INVERTED} title="Woden App" />
            </AppLinkDeprecated>
            <HStack max justify="between">
              <AppLinkDeprecated
                className={classes.createBtn}
                theme={AppLinkTheme.INVERTED_SECONDARY}
                to={getRouteArticleCreate()}
              >
                {t("Создать статью")}
              </AppLinkDeprecated>
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
    <ToggleFeatures
      feature="isAppRedesigned"
      off={
        <HStack
          max
          justify="between"
          className={classNames(classes.Header, {}, [className])}
        >
          <TextDeprecated
            className={classes.appName}
            theme={TextTheme.INVERTED}
            title={"Woden App"}
          />
          <ButtonDeprecated
            theme={ButtonTheme.OUTLINE_INVERTED}
            onClick={onOpenModal}
          >
            {t("Войти")}
          </ButtonDeprecated>
          {isAuthModal && (
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
          )}
        </HStack>
      }
      on={
        <HStack
          max
          justify="between"
          className={classNames(classes.HeaderRedesigned, {}, [className])}
        >
          <Button variant="filled" onClick={onOpenModal}>
            {t("Войти")}
          </Button>
          {isAuthModal && (
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
          )}
        </HStack>
      }
    />
  );
});
