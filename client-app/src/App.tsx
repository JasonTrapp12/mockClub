import { Box } from "@mui/material";
import "./App.css";
import Navbar from "./components/nav/Navbar";
import Home from "./features/home/Home";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Box height="100vh" width="100vw" display="flex" flexDirection="column">
      <Navbar />
      <Box flexGrow={1}>
        <Home />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
