import React from "react";
import "./HeroCover.css";

function HeroCover({ onOpen }) {
  return (
    <section className="hero-cover d-flex flex-column justify-content-center align-items-center text-center min-vh-100 position-relative">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="position-absolute w-100 h-100"
        style={{
          objectFit: "cover",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      >
        <source src="videos/hero-3.mp4" type="videos/mp4" />
        Browser Anda tidak mendukung video.
      </video>

      {/* Kotak undangan */}
      <div className="hero-box shadow-lg p-4 rounded-4">
        <h2
          className="fw-bold"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          Wahyu & Riski
        </h2>
        <p className="mb-0">Rabu, 15 Maret 2023</p>
        <button
          className="btn btn-dark rounded-pill mt-3 px-4 py-2"
          onClick={onOpen}
        >
          Buka Undanga
        </button>
      </div>
    </section>
  );
}

export default HeroCover;