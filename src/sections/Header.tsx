import {Box, Toolbar} from "@mui/material";
import "@fontsource/courgette/latin-400.css";
import "@fontsource/kaushan-script/latin-400.css";
import {headerOptions} from "../components/particles/particles.config";
import HeaderContent from "../components/header/components/HeaderContent";
import Particles from "../components/particles/Particles";

const Header = () => {
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          position: "absolute",
        }}>
        <Particles id="header-particles" particlesOptions={headerOptions} />
      </Box>
      <HeaderContent />
    </Box>
  );
};

export default Header;
