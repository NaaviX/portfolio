import React from "react";
import { Typography } from "@mui/material";

const SectionSubtitle = ({ children }: { children: string }) => {
  return (
    <Typography variant={"h3"} pb="0.5rem">
      {children}
    </Typography>
  );
};

export default SectionSubtitle;
