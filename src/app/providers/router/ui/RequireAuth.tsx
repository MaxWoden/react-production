import { getUserRoles, UserRole } from "@/entities/User";
import { useUserAuthData } from "@/entities/User";
import { getRouteForbidden, getRouteMain } from "@/shared/const/router";
import { ReactNode, useMemo } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

interface RequireAuthProps {
  children?: ReactNode;
  roles?: UserRole[];
}

export const RequireAuth = (props: RequireAuthProps) => {
  const { children, roles } = props;
  const location = useLocation();
  const auth = useUserAuthData();
  const userRoles = useSelector(getUserRoles);

  const hasRequiredRoles = useMemo(() => {
    if (!roles) {
      return true;
    }

    return roles?.some((requiredRole) => userRoles?.includes(requiredRole));
  }, [roles, userRoles]);

  if (!auth) {
    return <Navigate to={getRouteMain()} state={{ from: location }} />;
  }

  if (!hasRequiredRoles) {
    return <Navigate to={getRouteForbidden()} state={{ from: location }} />;
  }

  return <>{children}</>;
};
