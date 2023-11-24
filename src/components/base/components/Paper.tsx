import React from "react";
import { Paper as MuiPaper, SxProps } from "@mui/material";
import { Theme } from "@emotion/react";

const Paper = ({
  children,
  sx,
}: {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}) => {
  return (
    <MuiPaper
      variant="outlined"
      square={false}
      sx={{
        ...sx,
        p: "30px",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        placeItems: "center",
      }}
    >
      {children}
    </MuiPaper>
  );
};

export default Paper;
