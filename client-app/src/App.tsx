import { Box } from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./features/home/Home";

function App() {
  return (
    <Box width="100vw" height="100vh">
      <Navbar />
      <Home />
    </Box>
  );
}

export default App;
