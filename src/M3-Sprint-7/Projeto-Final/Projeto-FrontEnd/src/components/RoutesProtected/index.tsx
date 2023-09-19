import { Navigate, Outlet } from "react-router-dom";

export const RoutesProtected = () => {
  const userToken = localStorage.getItem("@user:token");
  const userCompanyToken = localStorage.getItem("@userCompany:token");

  if (!userCompanyToken && !userToken) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};
