import { Box, Typography, useTheme } from "@mui/material";
import soccerCoach from "assets/soccer-coach.jpeg";
import { useSmallScreen } from "../../hooks/useSmallScreen";

interface IPageBannerProps {
  title: string;
}
const PageBanner = ({ title }: IPageBannerProps) => {
  const theme = useTheme();
  const smallScreen = useSmallScreen();
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: 300, sm: 310, md: 310 },
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: theme.palette.text.secondary,
        backgroundImage: `url(${soccerCoach})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.27)",
          zIndex: 1,
        }}
      />
      <Typography
        variant={smallScreen ? "h2" : "h1"}
        sx={{
          position: "relative",
          zIndex: 2,
          letterSpacing: 3,
          textAlign: "center",
          "&::after": {
            content: '""',
            position: "absolute",
            left: "50%",
            bottom: "-8px",
            width: "0%",
            height: "5px",
            backgroundColor: theme.palette.secondary.main,
            transform: "translateX(-50%)",
            animation: "underlineGrow 1s forwards",
          },
          "@keyframes underlineGrow": {
            "0%": { width: "0%" },
            "100%": { width: "90%" },
          },
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};
export default PageBanner;
