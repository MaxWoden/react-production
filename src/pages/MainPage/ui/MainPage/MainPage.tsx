import { BugButton } from "@/app/providers/ErrorBoundary";

import { Page } from "@/widgets/Page";
import { memo } from "react";
import { useTranslation } from "react-i18next";

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
