import { Box, Icon, useTheme } from "@mui/material";

export interface IContactUsTileProps {
  icon: any;
  title: string;
  content: string;
  link?: string;
}
const ContactUsTile = (props: IContactUsTileProps) => {
  const { icon, title, content, link } = props;
  const theme = useTheme();
  return (
    <Box
      display="flex"
      sx={{
        border: `2px solid ${theme.palette.secondary.main}`,
        padding: "16px",
        borderRadius: "8px",
        gap: 2,
        "&:hover": {
          cursor: link ? "pointer" : "default",
        },
      }}
      alignContent="center"
      alignItems="center"
      justifyItems="center"
    >
      <Icon>{icon}</Icon>
      <Box sx={{ fontSize: "16px", fontWeight: "bold", marginTop: "8px" }}>
        {title}
      </Box>
      <Box sx={{ fontSize: "14px", marginTop: "4px" }}>{content}</Box>
    </Box>
  );
};
export default ContactUsTile;
