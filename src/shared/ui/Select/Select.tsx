import { memo, useEffect, useMemo, useState } from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import classes from "./Select.module.scss";

export interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  options: Array<SelectOption>;
  selectedItem?: SelectOption;
  label?: string;
  readonly?: boolean;
  onSelect?: (value: string) => void;
}

export const Select = memo((props: SelectProps) => {
  const { className, options, onSelect, label, selectedItem, readonly } = props;
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(selectedItem || options[0]);

  const selectHandler = (event: React.MouseEvent, item: SelectOption) => {
    event.stopPropagation();
    onSelect?.(item.value);
    setSelected(item);
    onToggle();
  };

  const onToggle = () => {
    if (readonly) return;
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    readonly && setOpen(false);
  }, [readonly]);

  const optionsList = useMemo(
    () =>
      options?.map((item) => {
        return (
          <li
            className={classNames(classes.item, {
              [classes.selected]: selected.value === item.value,
            })}
            key={item.value}
            onClick={(event) => selectHandler(event, item)}
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
});
