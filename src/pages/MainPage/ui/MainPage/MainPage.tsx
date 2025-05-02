import { BugButton } from "@/app/providers/ErrorBoundary";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Page } from "@/widgets/Page";

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <Page>
      {t("Главная страница")}
      <BugButton />
    </Page>
  );
};

export default memo(MainPage);
