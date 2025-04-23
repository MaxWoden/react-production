import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Select } from "shared/ui/Select/Select";
import { Currency } from "../../model/types/currency";

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

  return (
    <Select
      className={className}
      label={t("Укажите валюту")}
      readonly={readonly}
      options={options}
      value={value}
      onSelect={changeHandler}
    />
  );
});
