import { getUserAuthData } from "entities/User";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { RoutePath } from "shared/config/routerConfig/routerConfig";

interface RequireAuthProps {
  children?: ReactNode;
}

export const RequireAuth = (props: RequireAuthProps) => {
  const { children } = props;
  const auth = useSelector(getUserAuthData);
  const location = useLocation();

  if (!auth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} />;
  }

  return <>{children}</>;
};
