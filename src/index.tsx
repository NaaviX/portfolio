import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import appTheme from "./theme";
import { ParallaxProvider } from "react-scroll-parallax";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={appTheme}>
      <ParallaxProvider>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
          </Routes>
        </BrowserRouter>
      </ParallaxProvider>
    </ThemeProvider>
  </React.StrictMode>
);
