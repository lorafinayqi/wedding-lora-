import React, { useEffect, useState } from "react";
import AOS from "aos";
import { motion, AnimatePresence } from "framer-motion";

import Hero from "./components/Hero";
import HeroCover from "./components/HeroCover";
import WeddingPage from "./components/WeddingPage";
import Preloader from "./components/Preloader";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpenInvitation, setIsOpenInvitation] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="preloader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Preloader />
        </motion.div>
      ) : !isOpenInvitation ? (
        <motion.div
          key="hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
        >
          <Hero onOpen={() => setIsOpenInvitation(true)} />
        </motion.div>
      ) : (
        <motion.div
          key="wedding"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="d-flex min-vh-100"
        >
          {/* kiri: HeroCover (60%) */}
          <div
            className="d-none d-md-flex align-items-center justify-content-center"
            style={{ flex: "0 0 65%" }}
          >
            <HeroCover />
          </div>

          {/* kanan: WeddingPage (40%) */}
          <div
            className="flex-fill"
            style={{
              flex: "0 0 35%",
              overflowY: "auto",
              background: "#fff",
            }}
          >
            <WeddingPage />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;