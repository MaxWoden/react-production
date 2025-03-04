import { memo, SVGProps, VFC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import classes from "./Icon.module.scss";

interface IconProps {
  className?: string;
  Svg: VFC<SVGProps<SVGElement>>;
}

export const Icon = memo((props: IconProps) => {
  const { className, Svg } = props;

  return <Svg className={classNames(classes.Icon, {}, [className])} />;
});
