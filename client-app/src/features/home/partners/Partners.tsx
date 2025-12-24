import { Box, Grid, Typography, useTheme } from "@mui/material";
import HandshakeIcon from "@mui/icons-material/Handshake";
import { partners } from "../../../mockData/partners";
import PartnerTile from "./PartnerTile";
import { useSmallScreen } from "../../../hooks/useSmallScreen";

const Partners = () => {
  const theme = useTheme();
  const smallScreen = useSmallScreen();
  return (
    <Grid
      container
      width="100%"
      height="100%"
      padding={4}
      spacing={3}
      overflow="hidden"
    >
      <Grid size={12}>
        <Box display="flex" alignItems="center" gap={5}>
          <Box
            display="flex"
            gap={1}
            justifyContent="center"
            alignItems="center"
          >
            <HandshakeIcon
              fontSize="large"
              sx={{ color: theme.palette.text.primary }}
            />
            <Typography
              variant="h4"
              color={theme.palette.text.primary}
              fontWeight={600}
            >
              Our Partners
            </Typography>
          </Box>
        </Box>
      </Grid>
      {partners.map((partner) => {
        return (
          <Grid size={smallScreen ? 12 : 3}>
            <PartnerTile {...partner} />
          </Grid>
        );
      })}
    </Grid>
  );
};
export default Partners;
