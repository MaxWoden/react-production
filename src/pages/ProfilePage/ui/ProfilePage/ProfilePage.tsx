import { EditableProfileCard } from "features/editableProfileCard";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { Text } from "shared/ui/Text/Text";
import { Page } from "widgets/Page";

const ProfilePage = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <Text title={t("Статья не найдена")} />;
  }

  return (
    <Page>
      <EditableProfileCard id={id} />
    </Page>
  );
};

export default memo(ProfilePage);
