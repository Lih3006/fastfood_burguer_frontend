import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const token = localStorage.getItem("@user:token");
  return !token ? <Navigate to="/login" /> : <Outlet />;
};

export default ProtectedRoutes;
