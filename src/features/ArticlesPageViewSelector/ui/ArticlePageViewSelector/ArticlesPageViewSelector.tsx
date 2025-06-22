import { ArticleView } from "@/entities/Article";
import { memo, useCallback } from "react";
import GridIconDeprecated from "@/shared/assets/icons/grid.svg";
import ListIconDeprecated from "@/shared/assets/icons/list.svg";
import GridIcon from "@/shared/assets/icons/tile.svg";
import ListIcon from "@/shared/assets/icons/burger.svg";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button } from "@/shared/ui/deprecated/Button";
import { Icon as IconDeprecated } from "@/shared/ui/deprecated/Icon";
import classes from "./ArticlesPageViewSelector.module.scss";
import { HStack } from "@/shared/ui/redesigned/Stack";
import { ToggleFeatures, toggleFeatures } from "@/shared/features";
import { Icon } from "@/shared/ui/redesigned/Icon";
import { Card } from "@/shared/ui/redesigned/Card";

interface ArticlesPageViewSelectorProps {
  className?: string;
  view: ArticleView | undefined;
  onViewClick: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.LIST,
    icon: toggleFeatures({
      name: "isAppRedesigned",
      off: () => ListIconDeprecated,
      on: () => ListIcon,
    }),
  },
  {
    view: ArticleView.GRID,
    icon: toggleFeatures({
      name: "isAppRedesigned",
      off: () => GridIconDeprecated,
      on: () => GridIcon,
    }),
  },
];

export const ArticlesPageViewSelector = memo(
  (props: ArticlesPageViewSelectorProps) => {
    const { className, view, onViewClick } = props;

    const onClickHandle = useCallback(
      (newView: ArticleView) => () => {
        onViewClick(newView);
      },
      [onViewClick]
    );

    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        off={
          <HStack gap="8" className={classNames("", {}, [className])}>
            {viewTypes.map(({ view: itemView, icon }) => (
              <Button key={view} onClick={onClickHandle(itemView)}>
                <IconDeprecated
                  Svg={icon}
                  className={classNames(classes.icon, {
                    [classes.selected]: view === itemView,
                  })}
                />
              </Button>
            ))}
          </HStack>
        }
        on={
          <Card
            border="round"
            className={classNames(classes.ArticlesViewSelectorRedesigned, {}, [
              className,
            ])}
          >
            {viewTypes.map(({ icon, view: itemView }) => (
              <Icon
                key={itemView}
                clickable
                height={32}
                width={32}
                onClick={onClickHandle(itemView)}
                Svg={icon}
                className={classNames(classes.icon, {
                  [classes.selected]: view === itemView,
                })}
              />
            ))}
          </Card>
        }
      />
    );
  }
);
