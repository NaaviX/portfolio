import React from "react";
import "./App.css";
import Header from "./sections/Header";
import Skills from "./sections/Skills";
import Experiences from "./sections/Experiences";
import Projects from "./sections/Projects";
import Appbar from "./components/appbar/Appbar";
import Contact from "./sections/Contact";
import Courses from "./sections/Courses";
import Footer from "./sections/Footer";
import { createTheme, Theme, ThemeOptions, ThemeProvider } from "@mui/material";
import "@fontsource/roboto";
import moment from "moment/moment";
import Parallax from "./components/base/components/Parallax";
import { Section, sectionsData } from "./components/sections/sections.data";
import { Element } from "react-scroll";
import SectionTitle from "./components/sections/components/SectionTitle";
import SectionLayout from "./components/sections/SectionLayout";

moment().locale("fr");

const theme: Theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#b6bbcd",
    },
    secondary: {
      main: "#eee8d5",
    },
    background: {
      paper: "rgba(43, 47, 62, 0.7)",
      default: "#2B2F3E",
    },
  },
  components: {
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: "0.9rem",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: "1.1rem",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: "1.1rem",
        },
      },
    },
  },
  typography: {
    h1: {
      letterSpacing: 1.3,
      fontWeight: 300,
      fontSize: 105,
      color: "white",
    },
    h2: {
      fontWeight: 300,
      fontSize: 34,
    },
    h3: {
      fontWeight: 400,
      fontSize: 24,
    },
    h4: {
      fontWeight: 500,
      fontSize: 16,
    },
    subtitle1: {
      fontWeight: 600,
      letterSpacing: 2,
      fontSize: 24,
      color: "#ddd",
    },
    body1: {
      fontSize: 11,
    },
    button: {
      fontSize: 17,
      fontWeight: "bold",
      paddingBlock: 2,
      paddingInline: 8,
    },
  },
} as ThemeOptions);

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Appbar />
        <Header />
        {sectionsData.map((section: Section) => (
          <Element name={section.target} key={section.name} className="element">
            <SectionLayout title={section.name}>
              <section.element />
            </SectionLayout>
          </Element>
        ))}
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default App;
