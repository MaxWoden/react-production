import { getUserInited, initAuthData } from "@/entities/User";
import { ToggleFeatures } from "@/shared/features";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { HStack } from "@/shared/ui/redesigned/Stack";
import { Header } from "@/widgets/Header";
import { PageLoader } from "@/widgets/PageLoader";
import { Sidebar } from "@/widgets/Sidebar";
import { Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import { AppRouter } from "./providers/router";
import { MainLayout } from "@/shared/layouts";

export const App = () => {
  const dispatch = useAppDispatch();
  const inited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(initAuthData());
  }, [dispatch]);

  if (!inited) {
    return <PageLoader />;
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      off={
        <div className="app">
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
        <div className="app_redesigned">
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
