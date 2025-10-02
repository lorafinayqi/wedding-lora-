import React from "react";
import { Calendar, House, Gift, Image, Chat } from "react-bootstrap-icons";

function WeddingPage() {
  return (
    <div className="wedding-page bg-light min-vh-100 d-flex flex-column">
      {/* Hero section */}
      <section className="text-center py-5">
        <h3
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: "1.5rem",
          }}
        >
          Undangan Pernikahan
        </h3>

        <div className="my-4">
          <img
            src="img/bg.webp"
            alt="Couple"
            className="rounded-circle shadow"
            style={{ width: "200px", height: "200px", objectFit: "cover" }}
          />
        </div>

        <h4 style={{ fontFamily: "'Dancing Script', cursive" }}>
          Wahyu & Riski
        </h4>
        <p className="fw-bold">Rabu, 15 Maret 2023</p>

        <button className="btn btn-outline-dark rounded-pill px-4 py-2 mt-2">
          <Calendar className="me-2" />
          Save Google Calendar
        </button>
      </section>

      {/* Bottom navbar */}
      <nav className="mt-auto bg-white shadow-sm py-2 d-flex justify-content-around border-top">
        <button className="btn btn-link text-dark text-center">
          <House size={20} />
          <div style={{ fontSize: "0.8rem" }}>Home</div>
        </button>
        <button className="btn btn-link text-dark text-center">
          <Gift size={20} />
          <div style={{ fontSize: "0.8rem" }}>Mempelai</div>
        </button>
        <button className="btn btn-link text-dark text-center">
          <Calendar size={20} />
          <div style={{ fontSize: "0.8rem" }}>Tanggal</div>
        </button>
        <button className="btn btn-link text-dark text-center">
          <Image size={20} />
          <div style={{ fontSize: "0.8rem" }}>Galeri</div>
        </button>
        <button className="btn btn-link text-dark text-center">
          <Chat size={20} />
          <div style={{ fontSize: "0.8rem" }}>Ucapan</div>
        </button>
      </nav>
    </div>
  );
}

export default WeddingPage;