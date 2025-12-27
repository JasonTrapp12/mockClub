import { Box, Card, CardHeader, useTheme } from "@mui/material";
import type { INews } from "../../../models/News";
import defaultNews from "assets/default-news.png";
import { useNavigate } from "react-router-dom";

interface INewsPreviewTileProps {
  news: INews;
}
const NewsPreviewTile = (props: INewsPreviewTileProps) => {
  const { news } = props;
  const theme = useTheme();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/news/${news.id}`);
  };

  const formattedDate = news.date
    ? new Intl.DateTimeFormat("en-US").format(news.date)
    : "";

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
        border: `1px solid ${theme.palette.secondary.main}`,
        borderRadius: 3,
        boxShadow: theme.shadows[3],
        width: "100%",
        height: { xs: 350, sm: 380, md: 400 },
        mb: 2,
      }}
      onClick={handleClick}
    >
      <CardHeader
        title={news.title}
        subheader={`Date: ${formattedDate}`}
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
          color: theme.palette.secondary.main,
          backgroundImage: `url(${news.images[0] || defaultNews})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </Card>
  );
};
export default NewsPreviewTile;
