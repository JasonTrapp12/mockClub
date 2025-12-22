import { Box, useTheme } from "@mui/material";
import { useSmallScreen } from "../../hooks/useSmallScreen";
import logo from "assets/logo.png";

const Footer = () => {
  const theme = useTheme();
  const smallScreen = useSmallScreen();
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
      width="100%"
      pl={2}
      sx={{
        backgroundColor: theme.palette.text.primary,
        color: theme.palette.primary.contrastText,
        height: smallScreen ? "120px" : "140px",
      }}
    >
      <Box
        sx={{
          //width: "100%",
          //height: { xs: 300, sm: 330, md: 500 },
          height: smallScreen ? 100 : 120,
          width: smallScreen ? 100 : 120,
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
    </Box>
  );
};
export default Footer;
