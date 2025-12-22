import { Box, Stack, Typography, useTheme } from "@mui/material";
import bannerImage from "assets/banner.jpg";
import { useSmallScreen } from "../../hooks/useSmallScreen";

const Banner = () => {
  const theme = useTheme();
  const smallScreen = useSmallScreen();
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: 310, sm: 330, md: 620 },
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: theme.palette.text.secondary,
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        pt: "40px",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      />
      <Stack>
        <Typography
          variant={smallScreen ? "h3" : "h1"}
          sx={{
            position: "relative",
            zIndex: 2,
            textTransform: "uppercase",
            letterSpacing: 3,
            textAlign: "center",
          }}
        >
          Name Here
        </Typography>
        <Typography
          variant={smallScreen ? "h6" : "h4"}
          sx={{
            position: "relative",
            zIndex: 2,
            textTransform: "uppercase",
            letterSpacing: 3,
            textAlign: "center",
          }}
        >
          Subtext goes here
        </Typography>
      </Stack>
    </Box>
  );
};

export default Banner;
