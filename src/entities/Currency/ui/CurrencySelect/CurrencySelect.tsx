import { Country } from "entities/Country";
import { Currency } from "../../index";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Select } from "shared/ui/Select/Select";

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

  const selectedItem = options.find((item) => item.value === value);

  const changeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Currency);
    },
    [onChange]
  );

  return (
    <Select
      className={className}
      label={t("Укажите валюту")}
      readonly={readonly}
      options={options}
      selectedItem={selectedItem}
      onSelect={changeHandler}
    />
  );
});
