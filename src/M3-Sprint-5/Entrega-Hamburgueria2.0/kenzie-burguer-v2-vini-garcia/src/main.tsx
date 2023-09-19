import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from './styles/theme';
import App from './App';
import { ToolsProvider } from './providers/ToolsContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={mainTheme}>
        <ToolsProvider>
          <App />
        </ToolsProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
