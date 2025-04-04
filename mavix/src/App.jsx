import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cover from "./components/Cover";
import Work from "./components/Work";
import Marquee from "./components/Marquee";
import Testimonial from "./components/Testimonials";
import Bashk from "./components/Bashk";
import ContactsPage from "./components/Contact";
import GraphicDesign from "./pages/GraphicDesign";
import WebDevelopment from "./pages/WebDevelopment";
import SocialMedia from "./pages/SocialMedia";
import InteriorDesign from "./pages/InteriorDesign";
import LogoDesign from "./pages/LogoDesign";
import Animations3D from "./pages/Animations3D";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Main page route - shows all your original components */}
        <Route path="/" element={
          <>
            <Cover />
            <Work />
            <Marquee />
            <Testimonial />
            <Bashk />
            <ContactsPage />
          </>
        } />
        
        {/* Individual service pages */}
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/social-media" element={<SocialMedia />} />
        <Route path="/graphic-design" element={<GraphicDesign />} />
        <Route path="/interior-design" element={<InteriorDesign />} />
        <Route path="/logo-design" element={<LogoDesign />} />
        <Route path="/3d-animations" element={<Animations3D />} />
      </Routes>
    </Router>
  );
}

export default App;