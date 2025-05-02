import { memo, SVGProps, FC } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import classes from "./Icon.module.scss";

interface IconProps {
  className?: string;
  Svg: FC<SVGProps<SVGElement>>;
  inverted?: boolean;
}

export const Icon = memo((props: IconProps) => {
  const { className, Svg, inverted } = props;

  return (
    <Svg
      className={classNames(classes.Icon, { [classes.inverted]: inverted }, [
        className,
      ])}
    />
  );
});
