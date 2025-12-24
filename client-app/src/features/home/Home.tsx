import { Stack } from "@mui/material";
import Banner from "./Banner";
import NewsPreview from "./newsPreview/NewsPreview";
import Location from "./Location";
import Partners from "./partners/Partners";

const Home = () => {
  return (
    <Stack width="100%">
      <Banner />
      <Stack spacing={4}>
        <NewsPreview />
        <Location />
        <Partners />
      </Stack>
    </Stack>
  );
};
export default Home;
