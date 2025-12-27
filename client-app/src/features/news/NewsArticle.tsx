import {
  Box,
  CircularProgress,
  Stack,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useNewsStore } from "../../stores/useNewsStore";
import { useEffect } from "react";

const NewsArticle = () => {
  const theme = useTheme();
  const { id } = useParams<{ id: string }>();
  const { news, newsLoading, setNews } = useNewsStore();

  if (!id) {
    return (
      <Box p={4}>
        <Typography variant="h4" color={theme.palette.text.primary}>
          No Article specified.
        </Typography>
      </Box>
    );
  }

  useEffect(() => {
    if (!news || news.id !== id) {
      setNews(id);
    }
  }, [news, setNews]);

  if (!news || newsLoading) {
    return (
      <Box
        display="flex"
        width="100%"
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Stack width="100%" height="100%" spacing={5} alignItems="left" p={4}>
      <Toolbar />
      <Stack>
        <Typography variant="h2">{news.title}</Typography>
        <Typography
          variant="subtitle1"
          color={theme.palette.text.disabled}
          gutterBottom
        >
          {news.date.toDateString()}
        </Typography>
        {news.images[0] && (
          <Box
            sx={{
              width: "100%",
              height: { xs: 200, sm: 300, md: 400 },
              backgroundImage: `url(${news.images[0]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: 2,
              mb: 2,
            }}
          />
        )}
        <Typography variant="body1">{news.content}</Typography>
      </Stack>
    </Stack>
  );
};

export default NewsArticle;
