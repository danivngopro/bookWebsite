import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Navbar from "./components/Navbar";
import { Box } from "@mui/material";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactUsPage from "./pages/ContactUs/ContactUsPage";
import Footer from "./components/Footer";

function App() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/ContactUs" element={<ContactUsPage />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
