import { ArticleType } from "@/entities/Article";
import { memo, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { TabItem, Tabs as TabsDeprecated } from "@/shared/ui/deprecated/Tabs";
import { ToggleFeatures } from "@/shared/features";
import { Tabs } from "@/shared/ui/redesigned/Tabs";

interface ArticlesPageTypeTabsProps {
  className?: string;
  type: ArticleType;
  onChangeType: (type: ArticleType) => void;
}

export const ArticlesPageTypeTabs = memo((props: ArticlesPageTypeTabsProps) => {
  const { className, type, onChangeType } = props;
  const { t } = useTranslation();

  const typeTabs = useMemo<TabItem<ArticleType>[]>(
    () => [
      { value: ArticleType.ALL, content: t("Все статьи") },
      { value: ArticleType.IT, content: t("Айти") },
      { value: ArticleType.ECONOMICS, content: t("Экономика") },
      { value: ArticleType.SCIENCE, content: t("Наука") },
    ],
    [t]
  );

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      off={
        <TabsDeprecated<ArticleType>
          tabs={typeTabs}
          value={type}
          onTabClick={onChangeType}
          className={className}
        />
      }
      on={
        <Tabs<ArticleType>
          tabs={typeTabs}
          value={type}
          onTabClick={onChangeType}
          className={className}
        />
      }
    />
  );
});
