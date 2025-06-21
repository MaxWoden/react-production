import { classNames } from "@/shared/lib/classNames/classNames";
import { TestProps } from "@/shared/types/tests";
import { FC, memo, SVGProps } from "react";
import classes from "./Icon.module.scss";

type SvgProps = Omit<SVGProps<SVGElement>, "onlcick">;

interface IconBaseProps extends SvgProps, TestProps {
  className?: string;
  Svg: FC<SVGProps<SVGElement>>;
}

interface NonClickableIconProps extends IconBaseProps {
  clickable?: false;
}

interface ClickableBaseProps extends IconBaseProps {
  clickable?: true;
  onClick: () => void;
}

type IconPros = NonClickableIconProps | ClickableBaseProps;

export const Icon = memo((props: IconPros) => {
  const {
    className,
    Svg,
    width = 48,
    height = 48,
    clickable,
    ...otherProps
  } = props;

  const icon = (
    <Svg
      height={height}
      width={width}
      className={classNames(classes.Icon, {}, [className])}
      data-testid={props["data-testid"]}
      {...otherProps}
      onClick={undefined}
    />
  );

  if (clickable) {
    return (
      <button
        style={{ height, width }}
        type="button"
        onClick={props.onClick}
        className={classes.button}
      >
        {icon}
      </button>
    );
  }

  return icon;
});
