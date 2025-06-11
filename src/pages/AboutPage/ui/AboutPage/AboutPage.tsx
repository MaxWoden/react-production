import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Page } from "@/widgets/Page";

const AboutPage = () => {
  const { t } = useTranslation();
  return <Page data-testid="AboutPage">{t("Страница о нас")}</Page>;
};

export default memo(AboutPage);
