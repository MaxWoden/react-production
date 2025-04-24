import { getUserInited, userActions } from "entities/User";
import { Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { useInitialEffects } from "shared/lib/hooks/useInitialEffects/useInitialsEffects";
import { HStack } from "shared/ui/Stack";
import { Header } from "widgets/Header";
import { Sidebar } from "widgets/Sidebar";
import { AppRouter } from "./providers/router";

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
        <HStack align="start">
          <Sidebar />
          {inited && <AppRouter />}
        </HStack>
      </Suspense>
    </div>
  );
};
