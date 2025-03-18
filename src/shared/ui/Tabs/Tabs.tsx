import { ReactNode, useCallback, useEffect, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "../Button/Button";
import classes from "./Tabs.module.scss";
import { Card } from "../Card/Card";

export interface TabItem<T extends string> {
  value: T;
  content: ReactNode;
}

interface TabsProps<T extends string> {
  className?: string;
  tabs: TabItem<T>[];
  value: T;
  onTabClick: (tab: T) => void;
}

export const Tabs = <T extends string>(props: TabsProps<T>) => {
  const { className, tabs, value, onTabClick } = props;
  const [selected, setSelected] = useState(value);

  const onClickHandler = useCallback(
    (item: TabItem<T>) => {
      return () => {
        onTabClick(item.value);
        setSelected(item.value);
      };
    },
    [onTabClick]
  );

  return (
    <div className={classNames(classes.Tabs, {}, [className])}>
      {tabs.map((item) => (
        <Card
          onClick={onClickHandler(item)}
          className={classNames(classes.item, {
            [classes.selected]: selected === item.value,
          })}
        >
          {item.content}
        </Card>
      ))}
    </div>
  );
};
