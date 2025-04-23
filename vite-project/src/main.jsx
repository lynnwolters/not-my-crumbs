// IMPORTS //
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import theme from "./theme.js";
import { StrictMode } from "react";
import GlobalStyle from "./globalStyle.js";
import { BrowserRouter } from "react-router";
import App from "./App.jsx";

// COMPONENT //
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
