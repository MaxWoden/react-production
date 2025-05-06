import { AverageRating } from "@/entities/Rating";
import { memo } from "react";
import { useGetAllArticleRatings } from "../../api/articleRatingApi";

export interface ArticleAverageRatingProps {
  className?: string;
  articleId: string;
}

const ArticleAverageRating = (props: ArticleAverageRatingProps) => {
  const { className, articleId } = props;

  const { data, isLoading } = useGetAllArticleRatings(articleId);

  return (
    <AverageRating className={className} isLoading={isLoading} data={data} />
  );
};

export default memo(ArticleAverageRating);
