import { Comment } from "entities/Comment/model/types/comment";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Text } from "shared/ui/Text/Text";
import { CommentCard } from "../CommentCard/CommentCard";
import classes from "./CommentList.module.scss";

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
  const { className, comments, isLoading } = props;
  const { t } = useTranslation();

  let content;

  if (isLoading) {
    content = (
      <div>
        <CommentCard isLoading={isLoading} className={classes.comment} />
        <CommentCard isLoading={isLoading} className={classes.comment} />
      </div>
    );
  } else {
    content = <Text text={t("Комментарии отсутствуют")} />;
  }

  return (
    <div className={classNames(classes.CommentList, {}, [className])}>
      {comments?.length
        ? comments.map((comment) => (
            <CommentCard
              isLoading={isLoading}
              className={classes.comment}
              comment={comment}
            />
          ))
        : content}
    </div>
  );
});
