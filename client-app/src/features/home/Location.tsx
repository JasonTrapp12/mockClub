import { Box, Grid, Typography, useTheme } from "@mui/material";
import fieldImage from "assets/field.jpg";
import MapsEmbed from "./MapsEmbed";

const Location = () => {
  const theme = useTheme();
  return (
    <Grid container spacing={2} height="500px">
      <Grid size={4}>
        <Box
          sx={{
            width: "100%",
            height: { xs: 300, sm: 330, md: 500 },
            position: "relative",
            display: "flex",
            alignItems: "top",
            justifyContent: "center",
            color: theme.palette.text.secondary,
            backgroundImage: `url(${fieldImage})`,
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
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 1,
            }}
          />
          <Typography
            variant="h2"
            sx={{
              position: "relative",
              zIndex: 2,
              textTransform: "uppercase",
              letterSpacing: 3,
              textAlign: "center",
              mt: 3,
            }}
          >
            Our Location
          </Typography>
        </Box>
      </Grid>
      <Grid size={8}>
        <MapsEmbed />
      </Grid>
    </Grid>
  );
};
export default Location;
