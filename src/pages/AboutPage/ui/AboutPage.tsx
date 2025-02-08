import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation();
  return <div>{t("Страница о нас")}</div>;
};

export default AboutPage;
