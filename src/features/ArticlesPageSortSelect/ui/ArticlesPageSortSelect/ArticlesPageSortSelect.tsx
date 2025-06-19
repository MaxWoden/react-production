import { ArticleSortField } from "@/entities/Article";
import { classNames } from "@/shared/lib/classNames/classNames";
import { SortOrder } from "@/shared/types/sort";
import { Select, SelectOption } from "@/shared/ui/deprecated/Select";
import { HStack } from "@/shared/ui/deprecated/Stack";
import { memo, useMemo } from "react";
import { useTranslation } from "react-i18next";

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
          content: t("по убыванию"),
        },
        {
          value: "ASC",
          content: t("по возрастанию"),
        },
      ],
      [t]
    );

    return (
      <HStack gap="32" className={classNames("", {}, [className])}>
        <Select<ArticleSortField>
          label={t("Сортировать по")}
          options={sortFieldOptions}
          onSelect={onChangeSort}
          value={sort}
        ></Select>
        <Select<SortOrder>
          label={t("↑↓")}
          options={orderOptions}
          onSelect={onChangeOrder}
          value={order}
        ></Select>
      </HStack>
    );
  }
);
