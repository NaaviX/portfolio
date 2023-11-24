import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { sectionsData } from "../sections/sections.data";
import "./Appbar.css";

const drawerWidth = 240;

function Appbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Button
        onClick={() => scroll.scrollToTop()}
        sx={{ width: "100%", height: "64px" }}
      >
        <Typography variant="h6">ANTOINE</Typography>
      </Button>
      <Divider />
      <List>
        {sectionsData.map((item) => (
          <ListItem key={"drawer" + item.target} disablePadding>
            <Link
              to={item.target}
              smooth={true}
              duration={500}
              spy={true}
              style={{ display: "block", width: "100%" }}
              className="nav-item"
            >
              <ListItemButton onClick={handleDrawerToggle}>
                <Typography variant="button">{item.name}</Typography>
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Container>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "block" },
              }}
            >
              <Button
                onClick={() => scroll.scrollToTop()}
                sx={{ height: "64px", px: "20px" }}
              >
                <Typography variant="h6" component="div">
                  ANTOINE
                </Typography>
              </Button>
            </Box>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              {sectionsData.map((item) => (
                <Link
                  to={item.target}
                  smooth={true}
                  duration={500}
                  spy={true}
                  key={"navbar" + item.target}
                  className="nav-item"
                >
                  <Button sx={{ height: "64px", px: "12px" }}>
                    <Typography variant="button">{item.name}</Typography>
                  </Button>
                </Link>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Appbar;
