import { memo, ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "@/shared/lib/classNames/classNames";
import classes from "./AppLink.module.scss";
import { TestProps } from "@/shared/types/tests";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  INVERTED_PRIMARY = "inverted-primary",
  INVERTED_SECONDARY = "inverted-secondary",
}

interface AppLinkProps extends LinkProps, TestProps {
  className?: string;
  theme?: AppLinkTheme;
  children?: ReactNode;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

export const AppLink = memo((props: AppLinkProps) => {
  const {
    to,
    children,
    className,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;
  return (
    <Link
      data-testid={props["data-testid"]}
      to={to}
      className={classNames(classes.AppLink, {}, [classes[theme], className])}
      {...otherProps}
    >
      {children}
    </Link>
  );
});
