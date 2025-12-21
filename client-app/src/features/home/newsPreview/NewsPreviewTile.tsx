import { Card, CardHeader } from "@mui/material";
import type { INews } from "../../../models/News";

interface INewsPreviewTileProps {
  news: INews;
}
const NewsPreviewTile = (props: INewsPreviewTileProps) => {
  const { news } = props;
  return (
    <Card>
      <CardHeader title={news.title} subheader={news.date.getDate()} />
    </Card>
  );
};
export default NewsPreviewTile;
