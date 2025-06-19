import { ReactNode, useCallback, useState } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Card } from "../Card/Card";
import { HStack } from "../Stack";
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

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

export const Tabs = <T extends string>(props: TabsProps<T>) => {
  const { className, tabs, value, onTabClick, theme = TabsTheme.CLEAR } = props;
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

  const additionalClasses = [className, classes[theme]];

  return (
    <HStack wrap gap="16" className={classNames("", {}, additionalClasses)}>
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
    </HStack>
  );
};
