import { Box, Grid, Typography, useTheme } from "@mui/material";
import { news } from "../../../mockData/news";
import NewsPreviewTile from "./NewsPreviewTile";

const NewsPreview = () => {
  const theme = useTheme();
  return (
    <Box display="flex">
      <Typography
        variant="h6"
        color={theme.palette.text.primary}
        fontWeight="bold"
      >
        News
      </Typography>
      <Grid container>
        {news.map((newsItem) => {
          return <NewsPreviewTile news={newsItem} />;
        })}
      </Grid>
    </Box>
  );
};
export default NewsPreview;
