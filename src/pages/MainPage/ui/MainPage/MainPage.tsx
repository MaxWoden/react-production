import { BugButton } from "app/providers/ErrorBoundary";
import { memo } from "react";
import { useTranslation } from "react-i18next";

const MainPage = memo(() => {
  const { t } = useTranslation();

  return (
    <div>
      {t("Главная страница")}
      <BugButton />
    </div>
  );
});

export default MainPage;
