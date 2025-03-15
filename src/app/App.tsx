import { getUserInited, userActions } from "entities/User";
import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { Header } from "widgets/Header";
import { Sidebar } from "widgets/Sidebar";
import { AppRouter } from "./providers/router";
import { useInitialEffects } from "shared/lib/hooks/useInitialEffects/useInitialsEffects";

export const App = () => {
  const dispatch = useDispatch();
  const inited = useSelector(getUserInited);

  useInitialEffects(() => {
    dispatch(userActions.initAuthData());
  });

  return (
    <div className={classNames("app", {}, [])}>
      <Suspense fallback="">
        <Header />
        <div className="content-page">
          <Sidebar />
          {inited && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
};
