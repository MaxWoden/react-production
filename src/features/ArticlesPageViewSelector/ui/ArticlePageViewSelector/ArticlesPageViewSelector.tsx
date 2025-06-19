import { ArticleView } from "@/entities/Article";
import { memo } from "react";
import Grid from "@/shared/assets/icons/grid.svg";
import List from "@/shared/assets/icons/list.svg";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button } from "@/shared/ui/deprecated/Button";
import { Icon } from "@/shared/ui/deprecated/Icon";
import classes from "./ArticlesPageViewSelector.module.scss";
import { HStack } from "@/shared/ui/deprecated/Stack";

interface ArticlesPageViewSelectorProps {
  className?: string;
  view: ArticleView | undefined;
  onViewClick: (view: ArticleView) => void;
}

const viewTypes = [
  { view: ArticleView.LIST, Icon: List },
  { view: ArticleView.GRID, Icon: Grid },
];

export const ArticlesPageViewSelector = memo(
  (props: ArticlesPageViewSelectorProps) => {
    const { className, view, onViewClick } = props;

    return (
      <HStack gap="8" className={classNames("", {}, [className])}>
        {viewTypes.map((item, index) => (
          <Button key={index} onClick={() => onViewClick(item.view)}>
            <Icon
              Svg={item.Icon}
              className={classNames(classes.icon, {
                [classes.selected]: view === item.view,
              })}
            />
          </Button>
        ))}
      </HStack>
    );
  }
);
