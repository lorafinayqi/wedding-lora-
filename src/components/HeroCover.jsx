import React, { useEffect, useState } from "react";
import "./HeroCover.css";

function HeroCover({ onOpen }) {
  const images = [
    "img/contact-1.webp",
    "img/cewe.webp",
  ]; // daftar foto

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // ganti gambar setiap 4 detik

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero-cover d-flex flex-column justify-content-center align-items-center text-center min-vh-100"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
         flex: 1, 
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out",
      }}
    >
      <div className="hero-box shadow-lg p-4 rounded-4"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.6)", color: "black" }}
      >
        <h2
          className="fw-bold"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          Wahyu & Riski
        </h2>
        <p className="mb-0">Rabu, 15 Maret 2023</p>
      </div>
    </section>
  );
}

export default HeroCover;