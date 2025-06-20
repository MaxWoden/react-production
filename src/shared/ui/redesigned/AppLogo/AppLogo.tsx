import AppSvg from "@/shared/assets/icons/app-image.svg";
import { classNames } from "@/shared/lib/classNames/classNames";
import { memo } from "react";
import { HStack } from "../../deprecated/Stack";
import cls from "./AppLogo.module.scss";

interface AppLogoProps {
  className?: string;
  size?: number;
}

export const AppLogo = memo(({ className, size = 50 }: AppLogoProps) => {
  return (
    <HStack
      max
      justify="center"
      className={classNames(cls.appLogoWrapper, {}, [className])}
    >
      <AppSvg
        width={size}
        height={size}
        className={cls.appLogo}
        color="black"
      />
      <div className={cls.gradientBig} />
      <div className={cls.gradientSmall} />
    </HStack>
  );
});
