import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import { news } from "../../../mockData/news";
import NewsPreviewTile from "./NewsPreviewTile";
import { useSmallScreen } from "../../../hooks/useSmallScreen";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import SearchBar from "../../../components/common/SearchBar";
import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const NewsPreview = () => {
  const theme = useTheme();
  const smallScreen = useSmallScreen();
  const [pageNumber, setPageNumber] = useState(1);
  const pageSize = 4;
  const pageStartIndex = (pageNumber - 1) * pageSize;

  const sortedNews = [...news].sort(
    (a, b) => b.date.getTime() - a.date.getTime()
  );

  const pagedNews = sortedNews.slice(pageStartIndex, pageStartIndex + pageSize);

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
            alignContent="center"
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
          <SearchBar />
        </Box>
      </Grid>
      {pagedNews.length === 0 ? (
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
              pageNumber < news.length / pageSize
                ? setPageNumber(pageNumber + 1)
                : null
            }
            endIcon={<ArrowForwardIosIcon />}
          >
            Next Page
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};
export default NewsPreview;
