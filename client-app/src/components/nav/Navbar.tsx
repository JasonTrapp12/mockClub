import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Drawer,
  Button,
  List,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "assets/logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSmallScreen } from "../../hooks/useSmallScreen";
import NavButton from "./NavButton";
import { leftNavButtons, rightNavButtons } from "./navButtons";

const Navbar = () => {
  const theme = useTheme();
  const smallScreen = useSmallScreen();
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleNavButtonClick = (path: string) => navigate(path);
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <AppBar position="fixed">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo */}

        {/* Desktop Navbar */}
        {!smallScreen && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
              gap: 3,
            }}
          >
            {leftNavButtons.map((btn) => (
              <NavButton
                key={btn.label}
                onClick={() => handleNavButtonClick(btn.path)}
              >
                {btn.label}
              </NavButton>
            ))}

            <Box>
              <img
                src={logo}
                alt="Logo"
                style={{ height: 120, width: "auto" }}
              />
            </Box>

            {rightNavButtons.map((btn) => (
              <NavButton
                key={btn.label}
                onClick={() => handleNavButtonClick(btn.path)}
              >
                {btn.label}
              </NavButton>
            ))}
          </Box>
        )}

        {/* Mobile menu button */}
        {smallScreen && (
          <>
            <Box
              sx={{
                height: smallScreen ? 60 : 80,
                width: smallScreen ? 60 : 80,
                backgroundImage: `url(${logo})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                cursor: "pointer",
              }}
              onClick={() => navigate("/")}
            />
            <IconButton
              onClick={toggleDrawer}
              sx={{ color: theme.palette.text.primary }}
            >
              <MenuIcon />
            </IconButton>
          </>
        )}
      </Toolbar>

      {/* Mobile Drawer */}
      {smallScreen && (
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
          <Box sx={{ width: 250, p: 2 }}>
            <List>
              {[...leftNavButtons, ...rightNavButtons].map((btn) => (
                <Button
                  key={btn.label}
                  fullWidth
                  onClick={() => {
                    handleNavButtonClick(btn.path);
                    toggleDrawer();
                  }}
                >
                  {btn.label}
                </Button>
              ))}
            </List>
          </Box>
        </Drawer>
      )}
    </AppBar>
  );
};

export default Navbar;
