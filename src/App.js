import React from "react";
import { Routes, Route } from "react-router-dom";


// styles
import "./App.css";

// components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ReviewsPage from "./pages/ReviewsPage";
import ContactMePage from "./pages/ContactMePage";

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <div className="section-bg">
      
          <div>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/reviews" element={<ReviewsPage />} />
              <Route path="/contact" element={<ContactMePage />} />
            </Routes>
          </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
