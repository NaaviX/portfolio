import { useEffect } from "react";
import "./App.css";
import Header from "./sections/Header";
import Appbar from "./components/appbar/Appbar";
import Footer from "./sections/Footer";
import "@fontsource/roboto";
import moment from "moment/moment";
import { Section, sectionsData } from "./components/sections/sections.data";
import { Element } from "react-scroll";
import SectionLayout from "./components/sections/SectionLayout";
import Lenis from "@studio-freight/lenis";
import { Box } from "@mui/material";
import React from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

moment().locale("fr");

const App = () => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  return (
    <Box className="app">
      <Appbar />
      <Header />

      {sectionsData.map((section: Section) => (
        <Element
          name={section.target}
          key={section.name}
          className="element"
          style={{ position: "relative" }}
        >
          <SectionLayout title={section.name}>
            <section.element />
          </SectionLayout>
        </Element>
      ))}
      <Footer />
    </Box>
  );
};

export default App;
