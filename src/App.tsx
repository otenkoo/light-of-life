import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import SignInPage from "./pages/SignInPage";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import {
  Box,
  CssBaseline,
  Paper,
  ThemeProvider,
  createTheme,
} from "@mui/material";

// const darkTheme = createTheme({ palette: { mode: "dark" } });

export default function App() {
  return (
    <div>
          <CssBaseline />
          <ResponsiveAppBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/signin" element={<SignInPage />} />
          </Routes>
    </div>
  );
}
