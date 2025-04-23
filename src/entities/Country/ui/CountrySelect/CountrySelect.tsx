import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Select } from "shared/ui/Select/Select";
import { Country } from "../../model/types/country";

interface CountrySelectProps {
  className?: string;
  readonly?: boolean;
  value?: Country;
  onChange?: (value: Country) => void;
}

const options = [
  { value: Country.AM, content: "Армения" },
  { value: Country.BY, content: "Беларусь" },
  { value: Country.KZ, content: "Казахстан" },
  { value: Country.RU, content: "Россия" },
  { value: Country.UA, content: "Украина" },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
  const { className, readonly, value, onChange } = props;

  const { t } = useTranslation();

  const changeHandler = useCallback(
    (value: Country) => {
      onChange?.(value);
    },
    [onChange]
  );

  return (
    <Select<Country>
      className={className}
      label={t("Укажите страну")}
      readonly={readonly}
      options={options}
      value={value}
      onSelect={changeHandler}
    />
  );
});
