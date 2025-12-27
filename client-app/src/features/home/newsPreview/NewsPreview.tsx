import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import NewsPreviewTile from "./NewsPreviewTile";
import { useSmallScreen } from "../../../hooks/useSmallScreen";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import SearchBar from "../../../components/common/SearchBar";
import { useEffect, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNewsStore } from "../../../stores/useNewsStore";

const NewsPreview = () => {
  const theme = useTheme();
  const smallScreen = useSmallScreen();
  const [pageNumber, setPageNumber] = useState(1);

  const pageSize = 4;
  const pageStartIndex = (pageNumber - 1) * pageSize;
  const [searchTerm, setSearchTerm] = useState("");
  const { newsList, setNewsList, newsListLoading } = useNewsStore();

  useEffect(() => {
    if (!newsList) {
      setNewsList();
    }
  }, [newsList, setNewsList]);

  if (newsListLoading) {
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

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setPageNumber(1);
  };

  const filteredNews = newsList
    ? newsList.filter((n) =>
        n.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const sortedNews = [...filteredNews].sort(
    (a, b) => b.date.getTime() - a.date.getTime()
  );

  const pagedNews = sortedNews.slice(pageStartIndex, pageStartIndex + pageSize);

  const showPageOptions = () => {
    return sortedNews.length > pageSize;
  };

  return (
    <Grid
      container
      width="100%"
      height="100%"
      padding={4}
      spacing={3}
      overflow="hidden"
    >
      <Grid size={12}>
        <Box display="flex" alignItems="center" gap={5}>
          <Box
            display="flex"
            gap={1}
            justifyContent="center"
            alignItems="center"
          >
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
          <SearchBar onChange={handleSearchChange} />
        </Box>
      </Grid>
      {filteredNews.length === 0 ? (
        <Grid size={12}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            py={10}
            textAlign="center"
            sx={{
              border: `2px dashed ${theme.palette.secondary.main}`,
              borderRadius: 2,
              opacity: 0.8,
            }}
          >
            <NewspaperIcon
              sx={{
                fontSize: 64,
                color: theme.palette.text.disabled,
                mb: 2,
              }}
            />

            <Typography
              variant="h5"
              color={theme.palette.text.primary}
              fontWeight={600}
              mb={1}
            >
              No News Yet...
            </Typography>
          </Box>
        </Grid>
      ) : (
        pagedNews.map((newsItem) => (
          <Grid size={smallScreen ? 12 : 12 / pageSize} key={newsItem.id}>
            <NewsPreviewTile news={newsItem} />
          </Grid>
        ))
      )}

      {showPageOptions() && (
        <Grid size={12} display="flex" justifyContent="flex-end">
          <Box>
            <Button
              variant="text"
              sx={{ color: theme.palette.secondary.main }}
              onClick={() =>
                pageNumber > 1 ? setPageNumber(pageNumber - 1) : null
              }
              startIcon={<ArrowBackIosIcon />}
            >
              Previous Page
            </Button>
            <Button
              variant="text"
              sx={{ color: theme.palette.secondary.main }}
              onClick={() =>
                pageNumber < Math.ceil(filteredNews.length / pageSize)
                  ? setPageNumber(pageNumber + 1)
                  : null
              }
              endIcon={<ArrowForwardIosIcon />}
            >
              Next Page
            </Button>
          </Box>
        </Grid>
      )}
    </Grid>
  );
};
export default NewsPreview;
