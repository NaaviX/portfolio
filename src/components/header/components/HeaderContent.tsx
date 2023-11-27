import { Box, IconButton, Typography } from "@mui/material";
import { userData } from "../../user/user.data";
import SectionLayout from "../../sections/SectionLayout";
import HeaderTitle from "./HeaderTitle";
import Paper from "../../base/components/Paper";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import MagneticButton from "../../base/components/MagneticButton";

const HeaderContent = () => {
  return (
    <SectionLayout>
      <Box
        id="header"
        sx={{
          display: "flex",
          height: "100vh",
          flexDirection: "column",
          justifyContent: "space-evenly",
          textAlign: "center",
          zIndex: 1,
        }}
      >
        <HeaderTitle />
        <Paper>
          <Typography
            variant="h2"
            gutterBottom
            fontFamily="kaushan script"
            textAlign="center"
            marginBottom="50px"
          >
            {userData.jobTitle} <br />
            {userData.mainDescription}
          </Typography>
          <Box
            sx={{
              width: "30%",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <MagneticButton>
              <IconButton
                href={userData.linkedin}
                target="_blank"
                size="large"
                sx={{
                  m: "3px",
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px;",
                }}
              >
                <ContactPageOutlinedIcon />
              </IconButton>
            </MagneticButton>
            <MagneticButton>
              <IconButton
                href={userData.linkedin}
                target="_blank"
                size="large"
                sx={{
                  m: "3px",
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px;",
                }}
              >
                <LinkedInIcon />
              </IconButton>
            </MagneticButton>
          </Box>
        </Paper>
      </Box>
    </SectionLayout>
  );
};

export default HeaderContent;
