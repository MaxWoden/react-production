import { lazy } from "react";
import { LoginFormProps } from "./LoginForm";

export const LoginFormAsync = lazy<React.FC<LoginFormProps>>(
  () => import("./LoginForm")
);
