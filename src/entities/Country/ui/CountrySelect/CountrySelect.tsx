import { Select } from "@/shared/ui/deprecated/Select";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Country } from "../../model/types/country";
import { ToggleFeatures } from "@/shared/features";
import { ListBox } from "@/shared/ui/redesigned/Popups";

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

  const componentsProps = {
    className,
    label: t("Страна"),
    readonly,
    options,
    value,
    onSelect: changeHandler,
  };

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      off={<Select<Country> {...componentsProps} />}
      on={
        <ListBox<Country>
          items={options}
          direction="top right"
          {...componentsProps}
        />
      }
    />
  );
});
