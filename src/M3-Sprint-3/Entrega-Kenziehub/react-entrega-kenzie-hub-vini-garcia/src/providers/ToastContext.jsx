import { createContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

export const ToastContext = createContext({});

export function ToastProvider({ children }) {
  function handleToastSuccess(text) {
    toast.success(text);
  }
  function handleToastError(text) {
    toast.error(text);
  }

  return (
    <ToastContext.Provider
      value={{
        Toaster,
        handleToastSuccess,
        handleToastError,
      }}
    >
      <Outlet />
    </ToastContext.Provider>
  );
}
