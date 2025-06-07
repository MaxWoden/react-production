import {
  AppRouteProps,
  routeConfig,
} from "@/app/providers/router/config/routeConfig";
import { PageLoader } from "@/widgets/PageLoader";
import { memo, Suspense, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
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
          route.authOnly ? (
            <RequireAuth roles={route.roles}>{element}</RequireAuth>
          ) : (
            element
          )
        }
      ></Route>
    );
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
});
