import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1E90FF",
    },
    secondary: {
      main: "#FF6347",
    },
    background: {
      default: "#fffbfbff",
    },
    text: {
      primary: "#000000",
      secondary: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: '"Bebas Neue", "Arial", sans-serif',
    h1: { fontFamily: '"Bebas Neue", sans-serif', fontWeight: 700 },
    h2: { fontFamily: '"Bebas Neue", sans-serif', fontWeight: 700 },
    h3: { fontFamily: '"Bebas Neue", sans-serif', fontWeight: 700 },
    subtitle1: { fontFamily: '"Bebas Neue", sans-serif', fontWeight: 400 },
    button: {
      fontFamily: '"Bebas Neue", sans-serif',
      textTransform: "uppercase",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#FFFFFF",
          color: "#000000",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: '"Bebas Neue", sans-serif',
          fontWeight: 600,
        },
      },
    },
  },
});
