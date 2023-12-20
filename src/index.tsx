import {Box, CssBaseline, ThemeProvider} from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {ParallaxProvider} from "react-scroll-parallax";
import App from "./App";
import Appbar from "./components/appbar/Appbar";
import ProjectInfos from "./components/projects/components/ProjectInfos";
import "./index.css";
import Footer from "./sections/Footer";
import appTheme from "./theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={appTheme}>
      <ParallaxProvider>
        <CssBaseline />
        <Box className="app">
          <Appbar />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/project/:projectName" element={<ProjectInfos />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </BrowserRouter>
          <Footer />
        </Box>
      </ParallaxProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
