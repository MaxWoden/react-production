import { getUserAuthData, getUserRoles, UserRole } from "entities/User";
import { ReactNode, useMemo } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { RoutePath } from "shared/config/routerConfig/routerConfig";

interface RequireAuthProps {
  children?: ReactNode;
  roles?: UserRole[];
}

export const RequireAuth = (props: RequireAuthProps) => {
  const { children, roles } = props;
  const location = useLocation();
  const auth = useSelector(getUserAuthData);
  const userRoles = useSelector(getUserRoles);

  const hasRequiredRoles = useMemo(() => {
    if (!roles) {
      return true;
    }

    return roles?.some((requiredRole) => userRoles?.includes(requiredRole));
  }, [roles, userRoles]);

  if (!auth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} />;
  }

  if (!hasRequiredRoles) {
    return <Navigate to={RoutePath.forbidden} state={{ from: location }} />;
  }

  return <>{children}</>;
};
