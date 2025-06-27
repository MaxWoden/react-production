import { saveJsonSettings, useJsonSettings } from "@/entities/User";
import { ToggleFeatures } from "@/shared/features";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Drawer as DrawerDeprecated } from "@/shared/ui/deprecated/Drawer";
import { Modal as ModalDeprecated } from "@/shared/ui/deprecated/Modal";
import { Text as TextDeprecated } from "@/shared/ui/deprecated/Text";
import { Drawer } from "@/shared/ui/redesigned/Drawer";
import { Modal } from "@/shared/ui/redesigned/Modal";
import { Text } from "@/shared/ui/redesigned/Text";
import { memo, useCallback, useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";

export const ArticlePageGreeting = memo(() => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const { isArticlesPageWasOpened } = useJsonSettings();
  const [isOpen, setIsOpen] = useState(false);

  const onCloseHandler = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (!isArticlesPageWasOpened) {
      setIsOpen(true);
      dispatch(saveJsonSettings({ isArticlesPageWasOpened: true }));
    }
  }, [dispatch, isArticlesPageWasOpened]);

  const text = (
    <ToggleFeatures
      feature="isAppRedesigned"
      off={
        <TextDeprecated
          title={t("Добро пожаловать на страницу статей")}
          text={t(
            "Здесь вы можете искать и просматривать статьи на различные темы"
          )}
        />
      }
      on={
        <Text
          title={t("Добро пожаловать на страницу статей")}
          text={t(
            "Здесь вы можете искать и просматривать статьи на различные темы"
          )}
        />
      }
    />
  );

  if (isMobile) {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        off={<DrawerDeprecated>{text}</DrawerDeprecated>}
        on={<Drawer>{text}</Drawer>}
      />
    );
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      off={
        <ModalDeprecated lazy isOpen={isOpen} onClose={onCloseHandler}>
          {text}
        </ModalDeprecated>
      }
      on={
        <Modal lazy isOpen={isOpen} onClose={onCloseHandler}>
          {text}
        </Modal>
      }
    />
  );
});
