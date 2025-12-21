import { Box, useTheme } from "@mui/material";
import { useSmallScreen } from "../../hooks/useSmallScreen";

const Footer = () => {
  const theme = useTheme();
  const smallScreen = useSmallScreen();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.text.primary,
        color: theme.palette.primary.contrastText,
        height: smallScreen ? "120px" : "200px",
      }}
    ></Box>
  );
};
export default Footer;
