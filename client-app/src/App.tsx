import { Box, Stack } from "@mui/material";
import "./App.css";
import Navbar from "./components/nav/Navbar";
import Home from "./features/home/Home";
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./features/aboutUs/AboutUs";
import ContactUs from "./features/contactUs/ContactUs";
import NewsArticle from "./features/news/NewsArticle";
import Programs from "./features/programs/Programs";

function App() {
  return (
    <Stack height="100vh" width="100%" sx={{ overflowX: "hidden" }}>
      <Navbar />
      <Box flexGrow={1} width="100%">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/news/:id" element={<NewsArticle />} />
          <Route path="/programs" element={<Programs />} />
        </Routes>
      </Box>
      <Footer />
    </Stack>
  );
}

export default App;
