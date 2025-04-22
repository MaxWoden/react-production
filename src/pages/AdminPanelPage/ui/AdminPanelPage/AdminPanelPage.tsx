import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Page } from "widgets/Page";

interface AdminPanelPageProps {
  className?: string;
}

const AdminPanelPage = (props: AdminPanelPageProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return <Page className={className}>{t("Панель администратора")}</Page>;
};

export default memo(AdminPanelPage);
