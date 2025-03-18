import { EntityState } from "@reduxjs/toolkit";
import { Article, ArticleType, ArticleView } from "entities/Article";
import { ArticleSortField } from "entities/Article/model/types/article";
import { SortOrder } from "shared/types";

export interface ArticlesPageSchema extends EntityState<Article> {
  _inited: boolean;

  isLoading?: boolean;
  error?: string;

  // Pagination
  page: number;
  limit: number;
  hasMore: boolean;

  // Filters
  view: ArticleView;
  type: ArticleType;
  sort: ArticleSortField;
  order: SortOrder;
  search: string;
}
