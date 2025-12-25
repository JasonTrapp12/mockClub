import { TextField, useTheme } from "@mui/material";

export interface ISearchBarProps {
  onChange: (value: string) => void;
}
const SearchBar = (props: ISearchBarProps) => {
  const { onChange } = props;
  const theme = useTheme();
  return (
    <TextField
      placeholder="Search..."
      variant="outlined"
      onChange={(e) => onChange(e.target.value)}
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
      }}
    />
  );
};
export default SearchBar;
