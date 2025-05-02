import { useCallback, useEffect, useMemo, useState } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import classes from "./Select.module.scss";

export interface SelectOption<T extends string> {
  value: T;
  content: string;
}

interface SelectProps<T extends string> {
  className?: string;
  options: SelectOption<T>[];
  value?: T | undefined;
  label?: string;
  readonly?: boolean;
  onSelect: (value: T) => void;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
  const { className, options, onSelect, label, value, readonly } = props;
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  useEffect(() => {
    value && setSelected(options.find((item) => item.value === value)!);
  }, [value]);

  useEffect(() => {
    readonly && setOpen(false);
  }, [readonly]);

  const onSelectHandler = useCallback(
    (event: React.MouseEvent, item: SelectOption<T>) => {
      event.stopPropagation();
      onSelect(item.value);
      setSelected(item);
      setOpen(false);
    },
    []
  );

  const onToggle = () => {
    if (readonly) return;
    setOpen((prev) => !prev);
  };

  const optionsList = useMemo(
    () =>
      options?.map((item) => {
        return (
          <li
            className={classNames(classes.item, {
              [classes.selected]: selected.value === item.value,
            })}
            key={item.value}
            onClick={(event) => onSelectHandler(event, item)}
          >
            {item.content}
          </li>
        );
      }),
    [options, selected]
  );

  return (
    <div
      className={classNames(classes.Select, { [classes.disabled]: readonly }, [
        className,
      ])}
    >
      {label && <span className={classes.label}>{`${label}>`}</span>}
      <div className={classes.value} onClick={onToggle}>
        {selected.content}
      </div>
      {open && (
        <ul className={classes.list} onClick={onToggle}>
          {optionsList}
        </ul>
      )}
    </div>
  );
};
