import avatarFiller from "@/shared/assets/icons/avatar-filler.svg";
import { classNames } from "@/shared/lib/classNames/classNames";
import { CSSProperties, useMemo } from "react";
import { AppImage } from "../../redesigned/AppImage";
import { Icon } from "../Icon";
import classes from "./Avatar.module.scss";
import { Skeleton } from "../../deprecated/Skeleton";

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

export const Avatar = (props: AvatarProps) => {
  const { className, src, size = 100, alt } = props;

  const styles = useMemo<CSSProperties>(() => {
    return {
      width: size,
      height: size,
    };
  }, [size]);

  const errorFallback = <Icon Svg={avatarFiller} height={size} width={size} />;
  const fallback = <Skeleton width={size} height={size} border="50%" />;

  return (
    <AppImage
      errorFallback={errorFallback}
      fallback={fallback}
      alt={alt}
      src={src}
      style={styles}
      className={classNames(classes.Avatar, {}, [className])}
    ></AppImage>
  );
};
