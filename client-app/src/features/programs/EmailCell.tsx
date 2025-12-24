import { Box, IconButton, Link } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useModalStore } from "../../stores/useModalStore";

interface IEmailCellProps {
  email: string;
}

const EmailCell = ({ email }: IEmailCellProps) => {
  const { setSnackbarOpen } = useModalStore();

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setSnackbarOpen({ open: true, message: "Copied to clipboard." });
    } catch {
      console.error("Failed to copy email to clipboard");
    }
  };

  return (
    <Box display="flex" alignItems="center" gap={1}>
      <Link
        href={`mailto:${email}`}
        underline="none"
        sx={{
          "&:hover": { textDecoration: "none", color: "primary.main" },
        }}
      >
        {email}
      </Link>
      <IconButton
        onClick={handleCopyClick}
        disableRipple
        disableFocusRipple
        sx={{
          p: 0.5,
          borderRadius: 1,
          transition: "background-color 0.2s",
          "&:active": { backgroundColor: "rgba(0,0,0,0.1)" },
        }}
      >
        <ContentCopyIcon fontSize="small" />
      </IconButton>
    </Box>
  );
};

export default EmailCell;
