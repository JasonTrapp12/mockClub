import { Box, Stack } from "@mui/material";
import "./App.css";
import Navbar from "./components/nav/Navbar";
import Home from "./features/home/Home";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Stack height="100vh" width="100%" sx={{ overflowX: "hidden" }}>
      <Navbar />
      <Box flexGrow={1} width="100%">
        <Home />
      </Box>
      <Footer />
    </Stack>
  );
}

export default App;
