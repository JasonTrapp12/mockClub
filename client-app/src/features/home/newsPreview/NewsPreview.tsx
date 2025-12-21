import { Box, Grid, Typography, useTheme } from "@mui/material";
import { news } from "../../../mockData/news";
import NewsPreviewTile from "./NewsPreviewTile";
import { useSmallScreen } from "../../../hooks/useSmallScreen";
import NewspaperIcon from "@mui/icons-material/Newspaper";

const NewsPreview = () => {
  const theme = useTheme();
  const smallScreen = useSmallScreen();
  return (
    <Grid container width="100%" height="100%" padding={4} spacing={3}>
      <Grid size={12}>
        <Box display="flex" alignItems="center" gap={2}>
          <NewspaperIcon
            fontSize="large"
            sx={{ color: theme.palette.text.primary }}
          />
          <Typography
            variant="h4"
            color={theme.palette.text.primary}
            fontWeight={600}
          >
            News
          </Typography>
        </Box>
      </Grid>

      {news.map((newsItem) => {
        return (
          <Grid size={smallScreen ? 12 : 3}>
            <NewsPreviewTile news={newsItem} />
          </Grid>
        );
      })}
    </Grid>
  );
};
export default NewsPreview;
