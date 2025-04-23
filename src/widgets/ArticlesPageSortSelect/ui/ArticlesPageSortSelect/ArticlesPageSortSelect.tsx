import { memo, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Select, SelectOption } from "shared/ui/Select/Select";

import { ArticleSortField } from "entities/Article";
import { SortOrder } from "shared/types";
import { HStack } from "shared/ui/Stack";

interface ArticlesPageSortSelectProps {
  className?: string;
  order: SortOrder;
  sort: ArticleSortField;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticlesPageSortSelect = memo(
  (props: ArticlesPageSortSelectProps) => {
    const { className, order, sort, onChangeOrder, onChangeSort } = props;
    const { t } = useTranslation();

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
      () => [
        { value: ArticleSortField.VIEWS, content: t("популярности") },
        { value: ArticleSortField.CREATED, content: t("дате создания") },
        { value: ArticleSortField.TITLE, content: t("названию") },
      ],
      [t]
    );

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(
      () => [
        {
          value: "DESC",
          content: t("убыванию"),
        },
        {
          value: "ASC",
          content: t("возрастанию"),
        },
      ],
      [t]
    );

    return (
      <HStack gap="32" className={classNames("", {}, [className])}>
        <Select<ArticleSortField>
          label={t("Сортировать ПО")}
          options={sortFieldOptions}
          onSelect={(newSort: ArticleSortField) => onChangeSort(newSort)}
          value={sort}
        ></Select>
        <Select
          label={t("по")}
          options={orderOptions}
          onSelect={(newOrder: SortOrder) => onChangeOrder(newOrder)}
          value={order}
        ></Select>
      </HStack>
    );
  }
);
