import { Box, Card, CardHeader, useTheme } from "@mui/material";
import type { INews } from "../../../models/News";
import bannerImage from "assets/banner.jpg";
import defaultNews from "assets/default-news.png";
import { useSmallScreen } from "../../../hooks/useSmallScreen";

interface INewsPreviewTileProps {
  news: INews;
}
const NewsPreviewTile = (props: INewsPreviewTileProps) => {
  const { news } = props;
  const theme = useTheme();
  const smallScreen = useSmallScreen();
  return (
    <Card
      sx={{
        "&:hover": {
          backgroundColor: theme.palette.action.hover,
          transform: "scale(1.03)",
          transition: "transform 0.2s ease-in-out",
          cursor: "pointer",
          overflow: "hidden",
        },
        border: `1px solid ${theme.palette.text.primary}`,
        borderRadius: 3,
        boxShadow: theme.shadows[3],
        width: "100%",
        height: { xs: 350, sm: 380, md: 400 },
        mb: 2,
      }}
    >
      <CardHeader
        title={news.title}
        subheader={`Date: ${news.date.getMonth()}/${
          news.date.getDate() + 1
        }/${news.date.getFullYear()}`}
        slotProps={{
          subheader: {
            sx: {
              color: theme.palette.text.disabled,
            },
          },
        }}
      />
      <Box
        sx={{
          width: "100%",
          height: { xs: 300, sm: 330, md: 500 },
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: theme.palette.text.secondary,
          backgroundImage: `url(${news.images[0] || defaultNews})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </Card>
  );
};
export default NewsPreviewTile;
