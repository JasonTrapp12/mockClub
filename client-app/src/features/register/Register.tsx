import { Box, Typography } from "@mui/material";

const Register = () => {
  return (
    <Box
      display="flex"
      width="100%"
      minHeight="60vh"
      justifyContent="center"
      alignItems="center"
      px={3}
      textAlign="center"
    >
      <Typography color="text.primary" variant="h5">
        In practice, the Register button can link directly to another
        registration platform (SportsEngine, PlayMetrics, etc.)
      </Typography>
    </Box>
  );
};

export default Register;
