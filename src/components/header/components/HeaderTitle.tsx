import { Typography } from "@mui/material";
import { userData } from "../../user/user.data";

const HeaderTitle = () => {
  return (
    <div style={{ textAlign: "center", zIndex: 1 }} id="repulse-div">
      <Typography variant="h1" fontFamily="courgette">
        {userData.firstname} {userData.lastname}
      </Typography>
    </div>
  );
};

export default HeaderTitle;
