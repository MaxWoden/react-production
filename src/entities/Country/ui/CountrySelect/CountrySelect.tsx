import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Select } from "shared/ui/Select/Select";
import { Country } from "../../index";

interface CountrySelectProps {
  className?: string;
  readonly?: boolean;
  value?: Country;
  onChange?: (value: Country) => void;
}

const options = [
  { value: Country.AM, content: "Армения" },
  { value: Country.By, content: "Беларусь" },
  { value: Country.KZ, content: "Казахстан" },
  { value: Country.RU, content: "Россия" },
  { value: Country.UA, content: "Украина" },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
  const { className, readonly, value, onChange } = props;

  const { t } = useTranslation();

  const selectedItem = options.find((item) => item.value === value);

  const changeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Country);
    },
    [onChange]
  );

  return (
    <Select
      className={className}
      label={t("Укажите страну")}
      readonly={readonly}
      options={options}
      selectedItem={selectedItem}
      onSelect={changeHandler}
    />
  );
});
