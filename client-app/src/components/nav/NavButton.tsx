import { Button, useTheme, type ButtonProps } from "@mui/material";

export interface INavButton {
  label: string;
  path: string;
}

interface NavButtonProps extends ButtonProps {}

const NavButton = (props: NavButtonProps) => {
  const theme = useTheme();

  return (
    <Button
      {...props}
      sx={{
        position: "relative",
        color: theme.palette.text.primary,
        textTransform: "none",
        fontSize: "1.2rem",

        "&:hover": {
          backgroundColor: "transparent",
        },

        "&::after": {
          content: '""',
          position: "absolute",
          left: "50%",
          bottom: 4,
          width: "0%",
          height: "2px",
          backgroundColor: theme.palette.text.primary,
          transition: "width 200ms ease, left 200ms ease",
        },

        "&:hover::after": {
          width: "100%",
          left: 0,
        },
      }}
      size="large"
    >
      {props.children}
    </Button>
  );
};

export default NavButton;
