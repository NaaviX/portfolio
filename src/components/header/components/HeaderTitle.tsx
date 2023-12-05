import {Box, Typography} from "@mui/material";
import {userData} from "../../user/user.data";
import {motion} from "framer-motion";
import React from "react";
const HeaderTitle = () => {
  return (
    <Box id="repulse-div">
      <motion.div
        initial={{opacity: 0.3}}
        whileInView={{opacity: 1}}
        transition={{duration: 2}}
        viewport={{once: true}}>
        <Typography
          component="h1"
          sx={{
            letterSpacing: 1.4,
            fontWeight: 300,
            fontSize: 95,
            color: "#b6ecf7",
          }}
          fontFamily="courgette">
          {userData.firstname} {userData.lastname}
        </Typography>
      </motion.div>
    </Box>
  );
};

export default HeaderTitle;
