import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/About/AboutPage";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ArticlesByCategories from "./pages/Categories/ArticlesByCategories";
// theme
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme.ts";
import Contact from "./pages/Contact/Contact.tsx";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box className="banner-logo">
          <Link to="/">
            <img src="/news-press-logo2.png" alt="News-Press Logo" />
          </Link>
        </Box>
        <Box>
          <Navbar />
        </Box>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/articles/:category"
            element={<ArticlesByCategories />}
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
