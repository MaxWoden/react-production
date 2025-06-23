import { UiDesignSwitcher } from "@/features/uiDesignSwitcher";
import { VStack } from "@/shared/ui/redesigned/Stack";
import { Text } from "@/shared/ui/redesigned/Text";
import { Page } from "@/widgets/Page";
import { memo } from "react";
import { useTranslation } from "react-i18next";

interface SettingsPageProps {
  className?: string;
}

const SettingsPage = (props: SettingsPageProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <Page className={className}>
      <VStack max gap="16">
        <Text title={t("Настройки пользователя")} />
        <UiDesignSwitcher />
      </VStack>
    </Page>
  );
};

export default memo(SettingsPage);
