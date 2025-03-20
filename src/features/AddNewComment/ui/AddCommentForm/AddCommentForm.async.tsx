import { lazy } from "react";
import { AddCommentFormProps } from "./AddCommentForm";

export const AddCommentFormAsync = lazy<React.FC<AddCommentFormProps>>(
  () => import("./AddCommentForm")
);
