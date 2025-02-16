import classes from "./AppLink.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Link, LinkProps } from "react-router-dom";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  INVERTED_PRIMARY = "inverted-primary",
  INVERTED_SECONDARY = "inverted-secondary",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: React.FC<AppLinkProps> = (props) => {
  const {
    to,
    children,
    className,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;
  return (
    <Link
      to={to}
      className={classNames(classes.AppLink, {}, [classes[theme], className])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
