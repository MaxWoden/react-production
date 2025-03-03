import { getUserAuthData } from "entities/User";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { RoutePath } from "shared/config/routerConfig/routerConfig";

export const RequireAuth: React.FC = ({ children }) => {
  const auth = useSelector(getUserAuthData);
  let location = useLocation();

  if (!auth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} />;
  }

  return <>{children}</>;
};
