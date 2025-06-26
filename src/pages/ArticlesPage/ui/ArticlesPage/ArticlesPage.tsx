import { ArticlePageGreeting } from "@/features/articlePageGreeting";
import { ToggleFeatures } from "@/shared/features";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffects } from "@/shared/lib/hooks/useInitialEffects/useInitialsEffects";
import { TextAlign, Text as TextDeprecated } from "@/shared/ui/deprecated/Text";
import { VStack } from "@/shared/ui/redesigned/Stack";
import { Text as TextRedesigned } from "@/shared/ui/redesigned/Text";
import { Page } from "@/widgets/Page";
import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
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

  if (error) {
    return (
      <Page>
        <ToggleFeatures
          on={<TextDeprecated align={TextAlign.CENTER} title={error} />}
          off={<TextRedesigned align="center" title={error} />}
          feature={"isProfileRatingEnabled"}
        />
      </Page>
    );
  }

  return (
    <DynamicModuleLoader removeAfterRemount={false} reducers={reducers}>
      <VStack data-testid="ArticlesPage" max>
        <ArticleInfiniteList onLoadNextPart={onLoadNextPart} />
      </VStack>
      <ArticlePageGreeting />
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
