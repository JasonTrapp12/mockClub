import { AppBar, Box, Toolbar, useTheme } from "@mui/material";
import logo from "assets/logo.png";
import NavButton from "./NavButton";
import { useSmallScreen } from "../../hooks/useSmallScreen";
import { useNavigate } from "react-router-dom";

const leftNavButtons = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About Us",
    path: "/about",
  },
  {
    label: "Register",
    path: "/register",
  },
];
const rightNavButtons = [
  {
    label: "Programs",
    path: "/programs",
  },
  {
    label: "Schedule",
    path: "/schedule",
  },
  {
    label: "Contact Us",
    path: "/contact",
  },
];

const Navbar = () => {
  const theme = useTheme();
  const smallScreen = useSmallScreen();
  const navigate = useNavigate();

  const handleNavButtonClick = (path: string) => {
    navigate(path);
  };

  return (
    <Box>
      <AppBar>
        <Toolbar sx={{ justifyContent: "center" }}>
          {leftNavButtons.map((button) => (
            <Box key={button.label} display="flex" justifyContent="flex-start">
              <NavButton onClick={() => handleNavButtonClick(button.path)}>
                {button.label}
              </NavButton>
            </Box>
          ))}
          <Box
            sx={{
              //width: "100%",
              //height: { xs: 300, sm: 330, md: 500 },
              height: smallScreen ? 100 : 150,
              width: smallScreen ? 100 : 150,
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: theme.palette.text.secondary,
              backgroundImage: `url(${logo})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          {rightNavButtons.map((button) => (
            <Box key={button.label}>
              <NavButton onClick={() => handleNavButtonClick(button.path)}>
                {button.label}
              </NavButton>
            </Box>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;
