import { Button, useTheme, type ButtonProps } from "@mui/material";

interface NavButtonProps extends ButtonProps {}

const NavButton = (props: NavButtonProps) => {
  const theme = useTheme();
  return (
    <Button
      {...props}
      sx={{
        "&:hover": {
          textDecoration: "underline",
        },
        color: theme.palette.text.primary,
      }}
    >
      {props.children}
    </Button>
  );
};

export default NavButton;
