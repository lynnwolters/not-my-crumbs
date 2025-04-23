// IMPORTS //
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import theme from "./theme.js";
import { StrictMode } from "react";
import GlobalStyle from "./globalStyle.js";
import App from "./App.jsx";

// COMPONENT //
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>
);
