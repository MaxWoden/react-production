import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";

import { routeConfig } from "shared/config/routerConfig/routerConfig";

export const AppRouter = () => {
  const { t } = useTranslation();
  return (
    <Routes>
      {Object.values(routeConfig).map(({ element, path }) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense
              fallback={<div className="page-wrapper">{t("Загрузка")}...</div>}
            >
              <div className="page-wrapper">{element}</div>
            </Suspense>
          }
        ></Route>
      ))}
    </Routes>
  );
};
