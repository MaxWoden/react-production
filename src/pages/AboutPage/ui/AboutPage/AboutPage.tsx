import { useTranslation } from "react-i18next";
import { memo } from "react";

const AboutPage = memo(() => {
  const { t } = useTranslation();
  return <div>{t("Страница о нас")}</div>;
});

export default AboutPage;
