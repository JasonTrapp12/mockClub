import { Stack } from "@mui/material";
import Banner from "./Banner";
import Location from "./Location";
import NewsPreview from "./newsPreview/NewsPreview";

const Home = () => {
  return (
    <Stack width="100%">
      <Banner />
      <NewsPreview />
      {/* <Location /> */}
    </Stack>
  );
};
export default Home;
