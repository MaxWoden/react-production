import { memo, Suspense, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import {
  AppRouteProps,
  routeConfig,
} from "shared/config/routerConfig/routerConfig";
import { PageLoader } from "widgets/PageLoader/ui/PageLoader/PageLoader";
import { RequireAuth } from "./RequireAuth";

export const AppRouter = memo(() => {
  const renderWithWrapper = useCallback((route: AppRouteProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>{route.element}</Suspense>
    );
    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.authOnly ? <RequireAuth>{element}</RequireAuth> : element
        }
      ></Route>
    );
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
});
