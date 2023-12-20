import {Theme} from "@emotion/react";
import {Chip as MuiChip, SxProps} from "@mui/material";
import {ReactElement} from "react";

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
    <MuiChip
      label={label}
      icon={icon}
      sx={{...sx, pl: "4px", height: "min"}}></MuiChip>
  );
};

export default Chip;
