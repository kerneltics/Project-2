import { Navigate } from "react-router-dom";

type ProtectRouteProps = { children: React.ReactNode };

export const ProtectedRoute = ({ children }: ProtectRouteProps) => {
  // NOTE: This is temporary until we implement authentication logic.
  const isLoggedIn = true;

  if (!isLoggedIn) return <Navigate to="/login" />;

  return <>{children}</>;
};
