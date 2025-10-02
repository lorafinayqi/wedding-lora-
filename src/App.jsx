import React, { useEffect } from "react";
import AOS from "aos";

//import Header from "./components/Header";
import Hero from "./components/Hero";
//import About from "./components/About";
//import Gallery from "./components/Gallery";
//import Countdown from "./components/Countdown";
//import RSVP from "./components/RSVP";
//import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      <Hero />
    </div>
  );
}

export default App;