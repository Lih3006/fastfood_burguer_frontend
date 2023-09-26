import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { StoreProvider } from "./contexts/StoreContext";
import { CartProvider } from "./contexts/CartContext";
import ShopPage from "./pages/ShopPage";
import ProtectedRoutes from "./components/ProtectedRoutes";
import PublicRoutes from "./components/PublicRoutes";
import { NotFind } from "./pages/NotFind";

const Router = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
      <Route element={<ProtectedRoutes />}>
        <Route
          path="/shop"
          element={
            <StoreProvider>
              <CartProvider>
                <ShopPage />
              </CartProvider>
            </StoreProvider>
          }
        />
      </Route>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/404" element={<NotFind />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
};

export default Router;
