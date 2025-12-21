import { Box, Grid, Typography, useTheme } from "@mui/material";
import fieldImage from "assets/field.jpg";
import MapsEmbed from "./MapsEmbed";

const Location = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: "#2b2a2aff",
        width: "100%",
        py: { xs: 6, md: 10 },
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
              minHeight: 320,
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: theme.palette.text.secondary,
              backgroundImage: `url(${fieldImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: 2,
              overflow: "hidden",
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

        {/* RIGHT SIDE */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Box
            sx={{
              height: "100%",
              minHeight: 320,
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <MapsEmbed />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Location;
