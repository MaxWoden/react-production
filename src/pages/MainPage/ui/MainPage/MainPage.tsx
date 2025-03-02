import { BugButton } from "app/providers/ErrorBoundary";
import { memo } from "react";
import { useTranslation } from "react-i18next";

const MainPage = memo(() => {
  const { t } = useTranslation();

  return (
    <div style={{ color: "red" }}>
      {t("Главная страница")}
      <BugButton />
    </div>
  );
});

export default MainPage;
