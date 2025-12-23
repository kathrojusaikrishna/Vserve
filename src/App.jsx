import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);
import { useGSAP } from "@gsap/react";

import gsap from "gsap";

import Home from "./Pages/Home";
import Navbar from "./Layouts/Navbar";
import Footer from "./Layouts/Footer";
import Services from "./Pages/Services";
import Support from "./Pages/Support";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="get-support" element={<Support />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
