import { memo, ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "@/shared/lib/classNames/classNames";
import classes from "./AppLink.module.scss";
import { TestProps } from "@/shared/types/tests";

export type AppLinkTheme = "primary" | "red" | "inverted";

interface AppLinkProps extends LinkProps, TestProps {
  className?: string;
  variant?: AppLinkTheme;
  children?: ReactNode;
}

export const AppLink = memo((props: AppLinkProps) => {
  const { to, children, className, variant = "primary", ...otherProps } = props;
  return (
    <Link
      data-testid={props["data-testid"]}
      to={to}
      className={classNames(classes.AppLink, {}, [classes[variant], className])}
      {...otherProps}
    >
      {children}
    </Link>
  );
});
