import { useUserAuthData } from "@/entities/User";
import { getFeatureFlags } from "@/shared/features";
import { updateFeatureFlag } from "@/shared/features/services/updateFeatureFlags";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Skeleton } from "@/shared/ui/redesigned/Skeleton";
import { ListBox } from "@/shared/ui/redesigned/Popups";
import { HStack } from "@/shared/ui/redesigned/Stack";
import { Text } from "@/shared/ui/redesigned/Text";
import { memo, useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

interface UiDesignSwitcherProps {
  className?: string;
}

type DesignType = "new" | "old";

interface DesignInterface {
  content: string;
  value: DesignType;
}

export const UiDesignSwitcher = memo((props: UiDesignSwitcherProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const userId = useUserAuthData()?.id;
  const isAppRedesigned = getFeatureFlags("isAppRedesigned");

  const [isLoading, setIsLoading] = useState(false);

  const items: DesignInterface[] = useMemo(
    () => [
      { content: t("Новый"), value: "new" },
      { content: t("Старый"), value: "old" },
    ],
    [t]
  );

  if (!userId) {
    return null;
  }

  const onSelect = useCallback(
    async (designType: DesignType) => {
      setIsLoading(true);
      dispatch(
        updateFeatureFlag({
          userId,
          newFeatures: { isAppRedesigned: designType === "new" },
        })
      ).unwrap();
      setIsLoading(true);
    },
    [dispatch, userId]
  );

  return (
    <HStack gap="16">
      <Text text={t("Вариант интерфейса")} />
      {isLoading ? (
        <Skeleton width={100} height={40} />
      ) : (
        <ListBox
          onSelect={onSelect}
          items={items}
          value={isAppRedesigned ? "new" : "old"}
          className={className}
        />
      )}
    </HStack>
  );
});
