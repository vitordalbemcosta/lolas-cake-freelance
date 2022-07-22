import React from "react";
// import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";



// styles
import "./App.css";

// components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import BsCarousel from "./components/Carousel/BsCarousel";
import FigureAbout from "./components/Figure/Figure";


// no pages for now. working on components first
// pages
// import HomePage from "./pages/HomePage";
// import AboutPage from "./pages/AboutPage";
// import ReviewsPage from "./pages/ReviewsPage";
// import ContactMePage from "./pages/ContactMePage";



function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="section-bg">
        <div className="section-carousel">
          <BsCarousel />
        </div>
        <div className="section-about">
          <FigureAbout />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
