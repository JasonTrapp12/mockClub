import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  Toolbar,
  useTheme,
} from "@mui/material";
import type { INavButton } from "./NavButton";
import logo from "assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface IMobileNavProps {
  leftNavButtons: INavButton[];
  rightNavButtons: INavButton[];
}

const MobileNav = ({ leftNavButtons, rightNavButtons }: IMobileNavProps) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => setOpen(!open);

  const handleLogoClick = () => {
    navigate("/");
  };
  return (
    <>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box
            sx={{
              height: 60,
              width: 60,
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundImage: `url(${logo})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onClick={handleLogoClick}
          />
          <IconButton
            onClick={toggleDrawer}
            sx={{ color: theme.palette.text.primary }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={open} onClose={toggleDrawer}>
        <Box
          sx={{ width: 250, p: 2 }}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <List>
            {leftNavButtons.map((btn, i) => (
              <Button key={i} fullWidth onClick={() => navigate(btn.path)}>
                {btn.label}
              </Button>
            ))}
            {rightNavButtons.map((btn, i) => (
              <Button key={i} fullWidth onClick={() => navigate(btn.path)}>
                {btn.label}
              </Button>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default MobileNav;
