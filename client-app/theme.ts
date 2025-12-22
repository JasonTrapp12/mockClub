import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#01143d",
      //light: "#01143d",
    },
    secondary: {
      main: "#30606c",
      //light: "#9ad9e9ff",
    },
    background: {
      default: "#fcfbfbff",
    },
    text: {
      primary: "#000000",
      secondary: "#FFFFFF",
      disabled: "#706b6bff",
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
