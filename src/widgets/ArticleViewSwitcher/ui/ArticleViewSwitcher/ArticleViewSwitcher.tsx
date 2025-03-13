import { ArticleView } from "entities/Article";
import { memo } from "react";
import Grid from "shared/assets/icons/grid.svg";
import List from "shared/assets/icons/list.svg";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";
import { Icon } from "shared/ui/Icon/Icon";
import classes from "./ArticleViewSwitcher.module.scss";

interface ArticleViewSwitcherProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (newView: ArticleView) => void;
}

const viewTypes = [
  { view: ArticleView.LIST, Icon: List },
  { view: ArticleView.GRID, Icon: Grid },
];

export const ArticleViewSwitcher = memo((props: ArticleViewSwitcherProps) => {
  const { className, view, onViewClick } = props;

  const onCLick = (articleView: ArticleView) => () => {
    onViewClick?.(articleView);
  };

  return (
    <div className={classNames("", {}, [className])}>
      {viewTypes.map((item, index) => (
        <Button
          key={index}
          className={classes.btn}
          onClick={onCLick(item.view)}
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
});
