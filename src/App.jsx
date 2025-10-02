import React, { useEffect, useState } from "react";
import AOS from "aos";

import Hero from "./components/hero";      
import Preloader from "./components/Preloader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    // Simulasi loading (1.2 detik)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? <Preloader /> : <Hero />}
    </div>
  );
}

export default App;