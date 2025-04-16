import { ReactNode, useCallback, useEffect, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Card } from "../Card/Card";
import classes from "./Tabs.module.scss";

export enum TabsTheme {
  CLEAR = "clear",
  OUTLINE = "outline",
}

export interface TabItem<T extends string> {
  value: T;
  content: ReactNode;
}

interface TabsProps<T extends string> {
  className?: string;
  tabs: TabItem<T>[];
  value?: T;
  onTabClick: (tab: T) => void;
  theme?: TabsTheme;
}

export const Tabs = <T extends string>(props: TabsProps<T>) => {
  const { className, tabs, value, onTabClick, theme = TabsTheme.CLEAR } = props;
  const [selected, setSelected] = useState(tabs[0].value);

  useEffect(() => {
    value && setSelected(value);
  }, [value]);

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
    <div className={classNames(classes.Tabs, {}, [className, classes[theme]])}>
      {tabs.map((item) => (
        <Card
          key={item.value}
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
