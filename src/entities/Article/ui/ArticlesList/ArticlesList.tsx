import {
  HTMLAttributeAnchorTarget,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import {
  ContextProp,
  Virtuoso,
  VirtuosoGrid,
  VirtuosoGridHandle,
} from "react-virtuoso";
import { ARTICLE_LIST_ITEM_LOCALSTORAGE_IDX } from "shared/const/localstorage";
import { classNames } from "shared/lib/classNames/classNames";
import { useInitialEffects } from "shared/lib/hooks/useInitialEffects/useInitialsEffects";
import { HStack, VStack } from "shared/ui/Stack";
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import { ArticleView } from "../../model/consts/consts";
import { Article } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";
import classes from "./ArticlesList.module.scss";

interface VirtualizedArticlesList {
  Header: React.ComponentType<ContextProp<any>>;
  onLoadNextPart: () => void;
}

interface ArticlesListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
  wrap?: boolean;
  error?: boolean;
  virtualized?: VirtualizedArticlesList;
}

export const ArticlesList = memo((props: ArticlesListProps) => {
  const {
    className,
    articles,
    virtualized,
    isLoading,
    target,
    view = ArticleView.GRID,
    error,
  } = props;
  const { t } = useTranslation();
  const [selectedArticleId, setSelectedArticleId] = useState(0);
  const virtuosoGridRef = useRef<VirtuosoGridHandle>(null);

  const isList = view === ArticleView.LIST;
  const Stack = isList ? VStack : HStack;

  useInitialEffects(() => {
    const paged =
      sessionStorage.getItem(ARTICLE_LIST_ITEM_LOCALSTORAGE_IDX) || 0;
    setSelectedArticleId(+paged);
  });

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (!isList) {
      timeoutId = setTimeout(() => {
        if (virtuosoGridRef.current) {
          virtuosoGridRef.current.scrollToIndex(selectedArticleId);
        }
      }, 100);
    }
    console.log(selectedArticleId);
    return () => clearTimeout(timeoutId);
  }, [selectedArticleId, view]);

  const ItemsContainerComp = useCallback(
    ({ index }: { index: number }) => (
      <ArticleListItemSkeleton
        view={view}
        key={index}
        className={classes.skeleton}
      />
    ),
    []
  );

  const renderSkeletons = useCallback(() => {
    const skeletons = new Array(isList ? 3 : 16)
      .fill(0)
      .map(
        (_, index) => (
          <ArticleListItemSkeleton
            className={classes.skeleton}
            view={view}
            key={index}
          />
        ),
        []
      );

    return (
      <VStack max>
        {virtualized && <virtualized.Header context={() => {}} />}
        {isList ? (
          skeletons
        ) : (
          <div className={classes.itemsWrapper}>{skeletons}</div>
        )}
      </VStack>
    );
  }, [view]);

  const renderArticle = useCallback(
    (index: number, article: Article) => {
      return (
        <ArticleListItem
          target={target}
          key={article.id}
          article={article}
          view={view}
          className={classes.card}
          index={index}
        />
      );
    },
    [articles]
  );

  let content;

  if (isLoading) {
    content = renderSkeletons();
  } else if (error) {
    content = (
      <Text
        theme={TextTheme.ERROR}
        align={TextAlign.CENTER}
        text={t("Произошла ошибка")}
      />
    );
  } else if (!articles.length) {
    content = <Text align={TextAlign.CENTER} text={t("Статьи отсутствуют")} />;
  } else if (virtualized) {
    const { Header, onLoadNextPart } = virtualized;

    content = isList ? (
      <Virtuoso
        useWindowScroll
        components={{ Header }}
        data={articles}
        itemContent={renderArticle}
        totalCount={articles.length}
        endReached={onLoadNextPart}
        initialTopMostItemIndex={selectedArticleId}
      />
    ) : (
      <VirtuosoGrid
        ref={virtuosoGridRef}
        useWindowScroll
        style={{ height: "100%" }}
        totalCount={articles.length}
        components={{ Header, ScrollSeekPlaceholder: ItemsContainerComp }}
        endReached={onLoadNextPart}
        listClassName={classes.itemsWrapper}
        itemContent={renderArticle}
        data={articles}
        scrollSeekConfiguration={{
          enter: (velocity) => Math.abs(velocity) > 200,
          exit: (velocity) => Math.abs(velocity) < 30,
        }}
      />
    );
  } else {
    return (
      <Stack className={className} align="start" justify="start" max gap="32">
        {articles.map((article, index) => renderArticle(index, article))}
      </Stack>
    );
  }
  return (
    <div
      className={classNames(classes.ArticlesList, {}, [
        className,
        classes[view],
      ])}
    >
      {content}
    </div>
  );
});
