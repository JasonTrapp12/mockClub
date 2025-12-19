import { useTheme, useMediaQuery } from "@mui/material";

export const useSmallScreen = () => {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return { smallScreen };
};
