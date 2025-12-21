import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../theme.ts";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <App />
        </CssBaseline>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
