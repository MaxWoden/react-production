import { classNames } from "@/shared/lib/classNames/classNames";
import { TestProps } from "@/shared/types/tests";
import { memo, ReactNode } from "react";
import { LinkProps, NavLink } from "react-router-dom";
import classes from "./AppLink.module.scss";

export type AppLinkTheme = "primary" | "red" | "inverted";

interface AppLinkProps extends LinkProps, TestProps {
  className?: string;
  variant?: AppLinkTheme;
  children?: ReactNode;
  activeClassName?: string;
}

export const AppLink = memo((props: AppLinkProps) => {
  const {
    to,
    children,
    className,
    variant = "primary",
    activeClassName = "",
    ...otherProps
  } = props;
  return (
    <NavLink
      data-testid={props["data-testid"]}
      to={to}
      className={({ isActive }) =>
        classNames(classes.AppLink, { [activeClassName]: isActive }, [
          classes[variant],
          className,
        ])
      }
      {...otherProps}
    >
      {children}
    </NavLink>
  );
});
