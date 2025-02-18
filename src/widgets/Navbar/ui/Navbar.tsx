import classes from "./Navbar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return <nav className={classNames(classes.Navbar, {}, [className])}></nav>;
};
