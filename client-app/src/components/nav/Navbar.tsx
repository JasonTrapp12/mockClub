import { AppBar, Box, Toolbar, useTheme } from "@mui/material";
import logo from "assets/logo.png";
import NavButton from "./NavButton";
import { useSmallScreen } from "../../hooks/useSmallScreen";

const leftNavButtons = ["Home", "About Us", "Register"];
const rightNavButtons = ["Programs", "Schedule", "Contact Us"];

const Navbar = () => {
  const theme = useTheme();
  const smallScreen = useSmallScreen();
  return (
    <Box>
      <AppBar>
        <Toolbar sx={{ justifyContent: "center" }}>
          {leftNavButtons.map((buttonText) => (
            <Box key={buttonText} display="flex" justifyContent="flex-start">
              <NavButton>{buttonText}</NavButton>
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
          {rightNavButtons.map((buttonText) => (
            <Box key={buttonText}>
              <NavButton>{buttonText}</NavButton>
            </Box>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;
