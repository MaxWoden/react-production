import { ArticleView } from "entities/Article";
import { memo } from "react";
import Grid from "shared/assets/icons/grid.svg";
import List from "shared/assets/icons/list.svg";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";
import { Icon } from "shared/ui/Icon/Icon";
import classes from "./ArticlesPageViewSelector.module.scss";

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
      <div className={classNames("", {}, [className])}>
        {viewTypes.map((item, index) => (
          <Button
            key={index}
            className={classes.btn}
            onClick={() => onViewClick(item.view)}
          >
            <Icon
              Svg={item.Icon}
              className={classNames(classes.icon, {
                [classes.selected]: view === item.view,
              })}
            />
          </Button>
        ))}
      </div>
    );
  }
);
