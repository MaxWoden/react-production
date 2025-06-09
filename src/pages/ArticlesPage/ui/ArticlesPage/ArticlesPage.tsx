import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffects } from "@/shared/lib/hooks/useInitialEffects/useInitialsEffects";
import { VStack } from "@/shared/ui/Stack";
import { Text, TextAlign } from "@/shared/ui/Text";
import { Page } from "@/widgets/Page";
import {
  getArticlesPageError,
  getArticlesPageInited,
} from "../../model/selectors/articlesPageSelectors";
import { fetchNextArticlesPage } from "../../model/services/fetchNextArticlesPage/fetchNextArticlesPage";
import { initArticlesPage } from "../../model/services/initArticlesPage/initArticlesPage";
import { articlesPageReducer } from "../../model/slice/articlesPageSlice";
import { ArticleInfiniteList } from "../ArticleInfiniteList/ArticleInfiniteList";

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = () => {
  const dispatch = useAppDispatch();

  const error = useSelector(getArticlesPageError);
  const inited = useSelector(getArticlesPageInited);

  const [searchParams] = useSearchParams();
  useInitialEffects(() => !inited && dispatch(initArticlesPage(searchParams)));

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  console.log();

  if (error) {
    return (
      <Page>
        <Text align={TextAlign.CENTER} title={error} />
      </Page>
    );
  }

  return (
    <DynamicModuleLoader removeAfterRemount={false} reducers={reducers}>
      <VStack max>
        <ArticleInfiniteList onLoadNextPart={onLoadNextPart} />
      </VStack>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
