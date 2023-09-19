import { Routes, Route } from "react-router-dom";
import { NotFound } from "../pages/NotFound";
import { MainDashboard } from "../pages/MainDashboard";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { CommerceDashboard } from "../pages/CommerceDashboard";
import { UserDashboard } from "../pages/UserDashboard";
import Styles from "../components/Styles/Styles";
import { RoutesProtected } from "../components/RoutesProtected";
import { CommerceProvider } from "../providers/CommerceProvider";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<MainDashboard />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/signin" element={<LoginPage />}></Route>
      <Route path="/signup" element={<RegisterPage />}></Route>
      <Route path="/register" element={<RegisterPage />}></Route>
      <Route path="/styles" element={<Styles />}></Route>

      <Route element={<RoutesProtected />}>
        <Route
          path="/companyHome"
          element={
            <CommerceProvider>
              <CommerceDashboard />
            </CommerceProvider>
          }
        />
        <Route path="/userHome" element={<UserDashboard />} />
      </Route>

      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};
