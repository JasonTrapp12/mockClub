import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#36262a",
    },
    secondary: {
      main: "#6b333b",
    },
    background: {
      default: "#fcf6fe",
      paper: "#dbe8e2",
    },
    text: {
      primary: "#000000",
      secondary: "#FFFFFF",
      disabled: "#706b6bff",
    },
    success: {
      main: "#00a451",
      light: "#b6eacd",
    },
  },
  typography: {
    fontFamily: `
      -apple-system,
      BlinkMacSystemFont,
      "SF Pro Text",
      "SF Pro Display",
      "Segoe UI",
      Roboto,
      Helvetica,
      Arial,
      sans-serif
    `,

    h1: {
      fontFamily: '"Bebas Neue", sans-serif',
      fontWeight: 700,
      letterSpacing: "0.08em",
    },
    h2: {
      fontFamily: '"Bebas Neue", sans-serif',
      fontWeight: 700,
      letterSpacing: "0.08em",
    },
    h3: {
      fontFamily: '"Bebas Neue", sans-serif',
      fontWeight: 700,
      letterSpacing: "0.06em",
    },

    subtitle1: {
      fontWeight: 500,
    },

    button: {
      fontFamily: '"Bebas Neue", sans-serif',
      letterSpacing: "0.1em",
      textTransform: "uppercase",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#dbe8e2",
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
    // MuiTypography: {
    //   styleOverrides: {
    //     root: {
    //       textTransform: "uppercase",
    //     },
    //   },
    // },
  },
});
