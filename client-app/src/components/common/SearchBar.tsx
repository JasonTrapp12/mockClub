import { TextField, useTheme } from "@mui/material";

const SearchBar = () => {
  const theme = useTheme();
  return (
    <TextField
      placeholder="Search..."
      variant="outlined"
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: 3,

          "& fieldset": {
            borderColor: theme.palette.divider,
          },
          "&:hover fieldset": {
            borderColor: theme.palette.secondary.main,
          },
          "&.Mui-focused fieldset": {
            borderColor: theme.palette.secondary.main,
          },
        },
        "& .MuiInputBase-input": {
          color: theme.palette.text.primary,
        },
      }}
    />
  );
};
export default SearchBar;
