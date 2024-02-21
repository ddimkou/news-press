import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/About/AboutPage";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Box className="banner-logo">
        <Link to="/">
          <img src="./news-press-logo.png" alt="News-Press Logo" />
        </Link>
      </Box>
      <Box>
        <Navbar />
      </Box>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
};

export default App;
