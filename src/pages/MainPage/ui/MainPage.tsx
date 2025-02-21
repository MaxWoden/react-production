import { BugButton } from "app/providers/ErrorBoundary";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t } = useTranslation();

  const [value, setValue] = useState("fuck");

  return (
    <div>
      {t("Главная страница")}
      <BugButton />
    </div>
  );
};

export default MainPage;
