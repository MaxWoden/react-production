import { BugButton } from "@/app/providers/ErrorBoundary";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Page } from "@/widgets/Page";

import { RatingCard } from "@/entities/Rating";

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <Page>
      {t("Главная страница")}
      <BugButton />
      <RatingCard hasFeedback feedbackTitle="feedbacktitle" title="title" />
    </Page>
  );
};

export default memo(MainPage);
