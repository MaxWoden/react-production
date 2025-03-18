import { User } from "entities/User";

export enum ArticleSortField {
  VIEWS = "views",
  TITLE = "title",
  CREATED = "createdAt",
}

export enum ArticleBLockType {
  TEXT = "TEXT",
  CODE = "CODE",
  IMAGE = "IMAGE",
}

export interface ArticleBlockBase {
  id: string;
  type: ArticleBLockType;
}

export interface ArticleTextBlock extends ArticleBlockBase {
  type: ArticleBLockType.TEXT;
  title?: string;
  paragraphs: string[];
}

export interface ArticleCodeBlock extends ArticleBlockBase {
  type: ArticleBLockType.CODE;
  code: string;
  language: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
  type: ArticleBLockType.IMAGE;
  title: string;
  src: string;
}

export type ArticleBlock =
  | ArticleTextBlock
  | ArticleCodeBlock
  | ArticleImageBlock;

export enum ArticleType {
  ALL = "",
  IT = "IT",
  SCIENCE = "SCIENCE",
  ECONOMICS = "ECONOMICS",
}

export enum ArticleView {
  LIST = "LIST",
  GRID = "GRID",
}

export interface Article {
  id: string;
  user: User;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
}
