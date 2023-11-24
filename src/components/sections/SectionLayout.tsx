import React from "react";
import { Box, Container, Toolbar } from "@mui/material";
import SectionTitle from "./components/SectionTitle";

const SectionLayout = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) => {
  return (
    <Container
      maxWidth="xl"
      className="sectionContainer"
      sx={{
        minHeight: "100vh",
        position: "relative",
        pt: "30px",
        display: "flex",
        flexDirection: "column",
        placeItems: "center",
      }}
    >
      <Toolbar />
      <SectionTitle>{title}</SectionTitle>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          placeItems: "center",
        }}
      >
        {children}
      </Box>
    </Container>
  );
};

export default SectionLayout;
