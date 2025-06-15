import { getUserInited, initAuthData } from "@/entities/User";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { HStack } from "@/shared/ui/Stack";
import { Header } from "@/widgets/Header";
import { PageLoader } from "@/widgets/PageLoader";
import { Sidebar } from "@/widgets/Sidebar";
import { Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import { AppRouter } from "./providers/router";

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
    <div className="app">
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
