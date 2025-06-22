import { ReactNode, useCallback, useState } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Card } from "../Card/Card";
import { HStack } from "../../redesigned/Stack";
import classes from "./Tabs.module.scss";

export type TabsTheme = "normal" | "outlined";

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
  const { className, tabs, value, onTabClick, theme = "clear" } = props;
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
          variant={selected === item.value ? "outlined" : "normal"}
          key={item.value}
          onClick={onClickHandler(item)}
          className={classes.item}
        >
          {item.content}
        </Card>
      ))}
    </HStack>
  );
};
