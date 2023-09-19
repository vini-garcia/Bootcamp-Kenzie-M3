import { createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const getUserData = localStorage.getItem("@kenzieHub:userData");
  const userData = JSON.parse(getUserData);

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingUser, setLoadingUser] = useState(true);
  const [userTechs, setUserTechs] = useState([]);

  const navigate = useNavigate();

  function handleToastSuccess(text) {
    toast.success(text);
  }
  function handleToastError(text) {
    toast.error(text);
  }

  async function loadUser() {
    try {
      const token = localStorage.getItem("@kenzieHub:token");

      if (!token) {
        return;
      }

      const response = await api.get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(response.data);
      setUserTechs(response.data.techs);
    } catch (error) {
      const keysToRemove = ["@kenzieHub:token", "@kenzieHub:userData"];
      keysToRemove.forEach((key) => localStorage.removeItem(key));
    } finally {
      setLoadingUser(false);
    }
  }
  useEffect(() => {
    loadUser();
  }, []);

  async function signIn(formData) {
    setLoading(true);
    try {
      const response = await api.post("/sessions", formData);
      localStorage.setItem("@kenzieHub:token", response.data.token);
      localStorage.setItem("@kenzieHub:userData", JSON.stringify(response.data.user));
      const { user: userResponse, token } = response.data;
      setUserTechs(userResponse.techs);
      handleToastSuccess("Login realizado com sucesso.");
      setTimeout(() => {
        setUser(userResponse);
        navigate("/dashboard");
      }, 2000);
    } catch (error) {
      handleToastError(error.response.data.message);
    } finally {
      setLoading(false);
    }
  }

  async function registerSubmit(formData) {
    try {
      const response = await api.post("/users", formData);
      handleToastSuccess("Cadastro realizado com sucesso.");
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      handleToastError(error.response.data.message);
    }
  }

  function logout() {
    const keysToRemove = ["@kenzieHub:token", "@kenzieHub:userData"];
    keysToRemove.forEach((key) => localStorage.removeItem(key));
    handleToastSuccess("Logout realizado com sucesso");
    setTimeout(() => {
      setUser(null);
      navigate("/login");
    }, 2000);
  }

  return (
    <UserContext.Provider
      value={{
        userData,
        navigate,
        api,
        zodResolver,
        useForm,
        Link,
        useState,
        signIn,
        loading,
        user,
        setUser,
        loadingUser,
        loadUser,
        setUserTechs,
        userTechs,
        registerSubmit,
        Navigate,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
