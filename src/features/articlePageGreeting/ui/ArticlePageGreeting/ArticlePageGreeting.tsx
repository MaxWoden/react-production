import { saveJsonSettings, useJsonSettings } from "@/entities/User";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Drawer } from "@/shared/ui/deprecated/Drawer";
import { Modal } from "@/shared/ui/deprecated/Modal";
import { Text } from "@/shared/ui/deprecated/Text";
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
    <Text
      title={t("Добро пожаловать на страницу статей")}
      text={t(
        "Здесь вы можете искать и просматривать статьи на различные темы"
      )}
    />
  );

  if (isMobile) {
    return <Drawer>{text}</Drawer>;
  }

  return (
    <Modal lazy isOpen={isOpen} onClose={onCloseHandler}>
      {text}
    </Modal>
  );
});
