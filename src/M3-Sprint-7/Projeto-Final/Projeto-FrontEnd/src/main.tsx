import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { EatSmartTheme } from "./styles/theme.ts";
import { UserProvider } from "./providers/UserContext/UserContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ThemeProvider theme={EatSmartTheme}>
          <App />
        </ThemeProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
