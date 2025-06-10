import { getUserInited, useUserActions } from "@/entities/User";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useInitialEffects } from "@/shared/lib/hooks/useInitialEffects/useInitialsEffects";
import { HStack } from "@/shared/ui/Stack";
import { Header } from "@/widgets/Header";
import { Sidebar } from "@/widgets/Sidebar";
import { Suspense } from "react";
import { useSelector } from "react-redux";
import { AppRouter } from "./providers/router";

export const App = () => {
  const { initAuthData } = useUserActions();
  const inited = useSelector(getUserInited);

  useInitialEffects(() => {
    initAuthData();
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
