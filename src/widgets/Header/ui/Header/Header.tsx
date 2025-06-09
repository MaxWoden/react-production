import { getUserAuthData } from "@/entities/User";
import { LoginModal } from "@/features/AuthByUsername";
import { AvatarDropdown } from "@/features/avatarDropdown";
import { NotificationButton } from "@/features/notificationButton";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { HStack } from "@/shared/ui/Stack";
import { Text, TextTheme } from "@/shared/ui/Text";
import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import classes from "./Header.module.scss";
import { getRouteArticleCreate, getRouteMain } from "@/shared/const/router";

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
