import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Card } from "shared/ui/Card/Card";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { ArticleView } from "../../model/types/article";
import classes from "./ArticleListItem.module.scss";

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}

export const ArticleListItemSkeleton = memo(
  (props: ArticleListItemSkeletonProps) => {
    const { className, view } = props;

    if (view === ArticleView.LIST) {
      return (
        <div
          className={classNames(classes.ArticleListItem, {}, [
            className,
            classes[view],
          ])}
        >
          <Card>
            <div className={classes.header}>
              <Skeleton height={100} width={100} border={"50%"} />
              <Skeleton height={16} width={100} className={classes.username} />
              <Skeleton height={16} width={150} className={classes.date} />
            </div>
            <Skeleton height={16} width={250} className={classes.title} />
            <Skeleton width={300} height={16} className={classes.types} />
            <Skeleton width={"100%"} height={400} className={classes.img} />

            <div className={classes.footer}>
              <Skeleton height={32} width={150} />
              <Skeleton width={130} height={16} className={classes.views} />
            </div>
          </Card>
        </div>
      );
    }

    return (
      <div
        className={classNames(classes.ArticleListItem, {}, [
          className,
          classes[view],
        ])}
      >
        <Card>
          <div className={classes.imageWrapper}>
            <Skeleton width={200} height={200} className={classes.img} />
          </div>
          <div className={classes.infoWrapper}>
            <Skeleton width={130} height={16} className={classes.types} />
          </div>
          <Skeleton width={150} height={16} className={classes.title} />
        </Card>
      </div>
    );
  }
);
