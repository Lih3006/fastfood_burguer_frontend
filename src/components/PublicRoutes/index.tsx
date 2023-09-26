import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
  const token = localStorage.getItem("@user:token");
  return !token ? <Outlet /> : <Navigate to="/shop" />;
};

export default PublicRoutes;
