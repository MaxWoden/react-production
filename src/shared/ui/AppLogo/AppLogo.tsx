import AppSvg from "@/shared/assets/icons/app-image.svg";
import { classNames } from "@/shared/lib/classNames/classNames";
import { memo } from "react";
import { HStack } from "../Stack";
import cls from "./AppLogo.module.scss";

interface AppLogoProps {
  className?: string;
}

export const AppLogo = memo(({ className }: AppLogoProps) => {
  return (
    <HStack
      max
      justify="center"
      className={classNames(cls.appLogoWrapper, {}, [className])}
    >
      <AppSvg className={cls.appLogo} />
      <div className={cls.gradientBig} />
      <div className={cls.gradientSmall} />
    </HStack>
  );
});
