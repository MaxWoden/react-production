import { getUserInited, initAuthData } from "@/entities/User";
import { ToggleFeatures } from "@/shared/features";
import { MainLayout } from "@/shared/layouts/MainLayout";
import { AppLoaderLayout } from "@/shared/layouts/AppLoaderLayout";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { HStack } from "@/shared/ui/redesigned/Stack";
import { Header } from "@/widgets/Header";
import { PageLoader } from "@/widgets/PageLoader";
import { Sidebar } from "@/widgets/Sidebar";
import { Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import { AppRouter } from "./providers/router";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";

export const App = () => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const inited = useSelector(getUserInited);

  useEffect(() => {
    if (!inited) {
      dispatch(initAuthData());
    }
  }, [dispatch, inited]);

  if (!inited) {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <div id="app" className={classNames("app_redesigned", {}, [theme])}>
            <AppLoaderLayout />
          </div>
        }
        off={<PageLoader />}
      />
    );
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      off={
        <div id="app" className={classNames("app", {}, [theme])}>
          <Suspense fallback="">
            <Header />
            <HStack align="start">
              <Sidebar />
              <AppRouter />
            </HStack>
          </Suspense>
        </div>
      }
      on={
        <div id="app" className={classNames("app_redesigned", {}, [theme])}>
          <Suspense fallback="">
            <MainLayout
              sidebar={<Sidebar />}
              header={<Header />}
              content={<AppRouter />}
              toolbar={<div>qwe</div>}
            />
          </Suspense>
        </div>
      }
    />
  );
};
