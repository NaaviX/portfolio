import React from "react";
import { Divider, Typography } from "@mui/material";

const SectionTitle = ({ children }: { children?: string }) => {
  if (children) {
    return (
      <Divider sx={{ mb: "30px", width: "70%" }}>
        <Typography variant={"h2"} textAlign="center" marginInline={7}>
          {children}
        </Typography>
      </Divider>
    );
  }
  return <></>;
};

export default SectionTitle;
