import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Page } from "widgets/Page";

interface ForbiddenPageProps {
  className?: string;
}

const ForbiddenPage = (props: ForbiddenPageProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <Page className={className}>{t("У вас нет доступа к этой странице")}</Page>
  );
};

export default memo(ForbiddenPage);
