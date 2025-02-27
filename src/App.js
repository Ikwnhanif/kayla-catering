import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Nopage from "./page/Nopage";
import Menus from "./components/Menus";
import FAQ from "./components/Faq";
import FloatingButtons from "./components/FloatingWA";
const App = () => {
  return (
    <Router>
      <>
        <Header />
        <FloatingButtons />
        <main className="container mx-auto pt-10">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/menus" element={<Menus />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="*" element={<Nopage />} />
          </Routes>
        </main>
        <Footer />
      </>
    </Router>
  );
};

export default App;
