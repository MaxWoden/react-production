import { classNames } from "@/shared/lib/classNames/classNames";
import { memo, ReactElement } from "react";
import classes from "./MainLayout.module.scss";

interface MainLayoutProps {
  className?: string;
  sidebar: ReactElement;
  header: ReactElement;
  content: ReactElement;
  toolbar?: ReactElement;
}

export const MainLayout = memo((props: MainLayoutProps) => {
  const { className, sidebar, header, content, toolbar } = props;

  return (
    <div className={classNames(classes.MainLayout, {}, [className])}>
      <div className={classes.sidebar}>{sidebar}</div>
      <div className={classes.content}>{content}</div>
      <div className={classes.rightbar}>
        <div className={classes.header}>{header}</div>
        <div className={classes.toolbar}>{toolbar}</div>
      </div>
    </div>
  );
});
