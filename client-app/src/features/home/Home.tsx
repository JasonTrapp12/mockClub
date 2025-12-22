import { Stack } from "@mui/material";
import Banner from "./Banner";
import NewsPreview from "./newsPreview/NewsPreview";
import Location from "./Location";
import Partners from "./partners/Partners";

const Home = () => {
  return (
    <Stack width="100%" spacing={4}>
      <Banner />
      <NewsPreview />
      <Location />
      <Partners />
    </Stack>
  );
};
export default Home;
