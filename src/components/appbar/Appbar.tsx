import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
  Typography,
} from "@mui/material";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";
import {useRef, useState} from "react";
import {Link, animateScroll as scroll} from "react-scroll";
import {sectionsData} from "../sections/sections.data";
import "./Appbar.css";

const drawerWidth = 240;

const Appbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{textAlign: "center"}}>
      <Button
        onClick={() => scroll.scrollToTop()}
        sx={{width: "100%", height: "64px"}}>
        <Typography>ANTOINE</Typography>
      </Button>
      <Divider />
      <List>
        {sectionsData.map(item => (
          <ListItem key={"drawer" + item.target} disablePadding>
            <Link
              to={item.target}
              smooth={true}
              duration={500}
              spy={true}
              style={{display: "block", width: "100%"}}
              className="nav-item">
              <ListItemButton onClick={handleDrawerToggle}>
                <Typography variant="button">{item.name}</Typography>
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = useRef<HTMLDivElement | null>(null);
  const {scrollY} = useScroll();
  const springY = useSpring(scrollY);

  const appbarBg = useTransform(
    springY,
    [0, screen.height],
    ["rgba(8, 44, 54, 0.3)", "rgba(8, 44, 54, 0.8)"],
  );

  const appbarElevation = useTransform(
    springY,
    [0, 500],
    [
      "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
      "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
    ],
  );

  return (
    <Box sx={{display: "flex"}} ref={container}>
      <AppBar
        component="nav"
        style={{
          backgroundColor: "transparent",
        }}
        elevation={1}>
        <motion.div
          style={{backgroundColor: appbarBg, boxShadow: appbarElevation}}>
          <Container>
            <Toolbar>
              <IconButton
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{mr: 2, display: {md: "none"}}}>
                <MenuIcon />
              </IconButton>
              <Box
                sx={{
                  flexGrow: 1,
                  display: {xs: "none", md: "block"},
                }}>
                <Button
                  onClick={() => scroll.scrollToTop()}
                  sx={{height: "64px", px: "20px"}}>
                  <Typography variant="button">ANTOINE</Typography>
                </Button>
              </Box>
              <Box sx={{display: {xs: "none", md: "block"}}}>
                {sectionsData.map(item => (
                  <Link
                    to={item.target}
                    smooth={true}
                    duration={500}
                    spy={true}
                    key={"navbar" + item.target}
                    className="nav-item">
                    <Button sx={{height: "64px", px: "12px"}}>
                      <Typography variant="button">{item.name}</Typography>
                    </Button>
                  </Link>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </motion.div>
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
            display: {xs: "block", md: "none"},
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}>
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default Appbar;
