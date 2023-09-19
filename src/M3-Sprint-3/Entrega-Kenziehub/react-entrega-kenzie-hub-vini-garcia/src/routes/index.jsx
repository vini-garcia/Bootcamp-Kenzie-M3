import { Routes, Route, Navigate } from "react-router-dom";
import { DashboardPage } from "../pages/Dashboard";
import { LoginPage } from "../pages/Login";
import { RegisterPage } from "../pages/Register";
import { NotFoundPage } from "../pages/NotFound";
import { ToastProvider } from "../providers/ToastContext";
import { TechProvider } from "../providers/TechContext";

export function MainRoutes() {
  return (
    <Routes>
      <Route element={<ToastProvider />}>
        <Route element={<TechProvider />}>
          <Route path="/dashboard" element={<DashboardPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
