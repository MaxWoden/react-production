import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Select } from "@/shared/ui/deprecated/Select";
import { Currency } from "../../model/types/currency";
import { ToggleFeatures } from "@/shared/features";
import { ListBox } from "@/shared/ui/redesigned/Popups";

interface CurrencySelectProps {
  className?: string;
  readonly?: boolean;
  value?: Currency;
  onChange?: (value: Currency) => void;
}

const options = [
  { value: Currency.RUB, content: "Рубли" },
  { value: Currency.EUR, content: "Евро" },
  { value: Currency.USD, content: "Доллары" },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const { className, readonly, value, onChange } = props;
  const { t } = useTranslation();

  const changeHandler = useCallback(
    (value: Currency) => {
      onChange?.(value);
    },
    [onChange]
  );

  const componentsProps = {
    className,
    label: t("Валюта"),
    readonly,
    options,
    value,
    onSelect: changeHandler,
  };

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      off={<Select<Currency> {...componentsProps} />}
      on={
        <ListBox<Currency>
          items={options}
          direction="top right"
          {...componentsProps}
        />
      }
    />
  );
});
