import { Navigate } from "react-router-dom";

type ProtectRouteProps = { children: React.ReactNode };

export const ProtectedRoute = ({ children }: ProtectRouteProps) => {
  const token = localStorage.getItem("token");

  if (!token) return <Navigate to="/login" />;

  return <>{children}</>;
};
