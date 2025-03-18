import { useTranslation } from "react-i18next";
import { memo } from "react";
import { Page } from "widgets/Page";

const AboutPage = () => {
  const { t } = useTranslation();
  return <Page>{t("Страница о нас")}</Page>;
};

export default memo(AboutPage);
