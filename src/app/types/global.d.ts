declare module "*.scss" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}
declare module "*.svg" {
  import { VFC, SVGProps } from "react";
  const content: VFC<SVGProps<SVGElement>>;

  export default content;
}
declare module "*.png";
declare module "*.jpeg";
declare module "*.jpg";
declare module "*.woff";
declare module "*.woff2";

declare const __IS_DEV__: boolean;
