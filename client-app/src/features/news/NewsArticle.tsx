import { Box, Stack, Toolbar, Typography, useTheme } from "@mui/material";
import { useParams } from "react-router-dom";
import { news } from "../../mockData/news";
import type { INews } from "../../models/News";

const NewsArticle = () => {
  const theme = useTheme();
  const { id } = useParams<{ id: string }>();

  const article: INews | undefined = news.find((n) => n.id === id);

  if (!article) {
    return (
      <Box p={4}>
        <Typography variant="h4" color={theme.palette.text.primary}>
          Article not found
        </Typography>
      </Box>
    );
  }

  return (
    <Stack width="100%" height="100%" spacing={5} alignItems="left" p={4}>
      <Toolbar />
      <Stack>
        <Typography variant="h2">{article.title}</Typography>
        <Typography
          variant="subtitle1"
          color={theme.palette.text.disabled}
          gutterBottom
        >
          {article.date.toDateString()}
        </Typography>
        {article.images[0] && (
          <Box
            sx={{
              width: "100%",
              height: { xs: 200, sm: 300, md: 400 },
              backgroundImage: `url(${article.images[0]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: 2,
              mb: 2,
            }}
          />
        )}
        <Typography variant="body1">{article.content}</Typography>
      </Stack>
    </Stack>
  );
};

export default NewsArticle;
