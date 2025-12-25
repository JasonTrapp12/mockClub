import {
  Box,
  IconButton,
  Snackbar,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useModalStore } from "../../stores/useModalStore";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useSmallScreen } from "../../hooks/useSmallScreen";
import CloseIcon from "@mui/icons-material/Close";
import type { ISnackbarContainer } from "../../models/SnackbarContainer";

const SnackbarContainer = (props: ISnackbarContainer) => {
  const { message, open } = props;
  const { setSnackbarOpen } = useModalStore();
  const theme = useTheme();
  const smallScreen = useSmallScreen();
  return (
    <Snackbar open={open} onClose={() => setSnackbarOpen({ open: false })}>
      <Box
        display="flex"
        gap={1}
        sx={{
          backgroundColor: theme.palette.success.light,
          p: 2,
          mb: 1,
          boxShadow: theme.shadows[2],
        }}
        //height={smallScreen ? 100 : 200}
        width={smallScreen ? "100%" : 500}
        borderBottom={`2px solid ${theme.palette.success.main}`}
        borderRadius={4}
      >
        <Stack spacing={1} width="100%">
          <Box display="flex" justifyContent="space-between" width="100%">
            <Box display="flex" gap={1} alignItems="center">
              <CheckCircleOutlineIcon
                sx={{ color: theme.palette.success.main }}
              />
              <Typography variant="h6">Success</Typography>
            </Box>
            <IconButton onClick={() => setSnackbarOpen({ open: false })}>
              <CloseIcon sx={{ color: theme.palette.text.disabled }} />
            </IconButton>
          </Box>

          <Box>
            <Typography variant="subtitle1" ml={4}>
              {message ?? ""}
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Snackbar>
  );
};
export default SnackbarContainer;
