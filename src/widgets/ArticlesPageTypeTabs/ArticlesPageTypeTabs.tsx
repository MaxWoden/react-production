import { ArticleType } from "entities/Article";
import { memo, useMemo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";
import classes from "./ArticlesPageTypeTabs.module.scss";
import { TabItem, Tabs } from "shared/ui/Tabs/Tabs";
import { useTranslation } from "react-i18next";

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
    <div className={classNames(classes.ArticlesPageTypeTabs, {}, [className])}>
      <Tabs<ArticleType>
        tabs={typeTabs}
        value={type}
        onTabClick={onChangeType}
      />
    </div>
  );
});
