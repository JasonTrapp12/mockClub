import { Box, CircularProgress, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import Banner from "./Banner";
import NewsPreview from "./newsPreview/NewsPreview";
import Location from "./Location";
import Partners from "./partners/Partners";
import { supabase } from "../../supabase/supabase";
import type { INews } from "../../models/News";
import { useNewsStore } from "../../stores/useNewsStore";

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
