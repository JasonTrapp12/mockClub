import { Box, Grid, Paper, Typography, useTheme } from "@mui/material";
import fieldImage from "assets/field.jpg";
import MapsEmbed from "./MapsEmbed";
import { useSmallScreen } from "../../hooks/useSmallScreen";

const Location = () => {
  const theme = useTheme();
  const smallScreen = useSmallScreen();

  return (
    <Paper
      elevation={8}
      sx={{
        backgroundColor: theme.palette.primary.main,
        width: "100%",
        py: { xs: 6, md: 10 },
        // borderTop: "1px solid rgba(255,255,255,0.08)",
        // borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="stretch"
        maxWidth="xl"
        mx="auto"
        px={{ xs: 2, md: 6 }}
      >
        <Grid size={{ xs: 12, md: 4 }}>
          <Box
            sx={{
              height: "100%",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: theme.palette.background.paper,
              backgroundImage: `url(${fieldImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: 2,
              overflow: "hidden",
              border: `2px solid ${theme.palette.background.paper}`,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                backgroundColor: "rgba(0,0,0,0.6)",
              }}
            />

            <Typography
              variant="h2"
              sx={{
                position: "relative",
                zIndex: 1,
                textTransform: "uppercase",
                letterSpacing: 4,
                textAlign: "center",
              }}
            >
              Our Location
            </Typography>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 8 }}>
          <Box
            sx={{
              height: "100%",
              borderRadius: 2,
              overflow: "hidden",
              border: `2px solid ${theme.palette.background.paper}`,
            }}
          >
            <MapsEmbed />
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Location;
