import { AppBar, Box, Toolbar } from "@mui/material";
import logo from "assets/logo.png";
import NavButton from "./NavButton";
import { useSmallScreen } from "../../hooks/useSmallScreen";
import { useNavigate } from "react-router-dom";
import MobileNav from "./MobileNav";
import { leftNavButtons, rightNavButtons } from "./navButtons";

const Navbar = () => {
  const smallScreen = useSmallScreen();
  const navigate = useNavigate();

  const handleNavButtonClick = (path: string) => {
    navigate(path);
  };

  return smallScreen ? (
    <MobileNav
      leftNavButtons={leftNavButtons}
      rightNavButtons={rightNavButtons}
    />
  ) : (
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
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={logo}
              alt="Logo"
              style={{
                height: smallScreen ? 80 : 120,
                width: "auto",
              }}
            />
          </Box>

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
