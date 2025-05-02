import { EntityState } from "@reduxjs/toolkit";
import {
  Article,
  ArticleSortField,
  ArticleType,
  ArticleView,
} from "@/entities/Article";
import { SortOrder } from "@/shared/types";

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
