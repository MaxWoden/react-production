import { Page } from "@/widgets/Page";
import { memo } from "react";
import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t } = useTranslation();

  return <Page data-testid="MainPage">{t("Главная страница")}</Page>;
};

export default memo(MainPage);
