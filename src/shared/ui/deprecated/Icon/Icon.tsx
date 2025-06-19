import { classNames } from "@/shared/lib/classNames/classNames";
import { TestProps } from "@/shared/types/tests";
import { FC, memo, SVGProps } from "react";
import classes from "./Icon.module.scss";

interface IconProps extends SVGProps<SVGElement>, TestProps {
  className?: string;
  Svg: FC<SVGProps<SVGElement>>;
  inverted?: boolean;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

export const Icon = memo((props: IconProps) => {
  const { className, Svg, inverted, ...otherProps } = props;

  return (
    <Svg
      className={classNames(classes.Icon, { [classes.inverted]: inverted }, [
        className,
      ])}
      data-testid={props["data-testid"]}
      {...otherProps}
    />
  );
});
