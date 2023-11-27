import React, { FC, ReactElement, SVGProps } from "react";
import { Paper as MuiPaper, SxProps, Chip as MuiChip } from "@mui/material";
import { Theme } from "@emotion/react";

const Chip = ({
  icon,
  label,
  sx,
}: {
  icon: ReactElement | undefined;
  label: string;
  sx?: SxProps<Theme>;
}) => {
  return (
    <MuiChip label={label} icon={icon} sx={{ ...sx, pl: "4px" }}></MuiChip>
  );
};

export default Chip;
