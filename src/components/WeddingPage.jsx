import React from "react";
import { Calendar, House, Gift, Image, Chat } from "react-bootstrap-icons";

function WeddingPage() {
  return (
    <div
      className="wedding-page min-vh-100 d-flex flex-column text-black"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Background blur */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url('img/bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(3px)", // efek kabur
          transform: "scale(1.1)", // sedikit diperbesar biar tidak ada tepi kosong
          zIndex: 0,
        }}
      />

      {/* overlay transparan gelap */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(255, 255, 255, 0.5)",
          zIndex: 1,
        }}
      />

      {/* Hero section */}
      <section
        className="text-center py-5"
        style={{ position: "relative", zIndex: 2 }}
      >
        <h3
          style={{
            fontFamily: "'Dancing Script', cursive",
           fontSize: "2rem",
          marginBottom: "4rem",
          }}
        >
          Undangan Pernikahan
        </h3>

        <div className="my-4 d-flex justify-content-center">
          <img
            src="img/bg.webp"
            alt="Couple"
            className="rounded-circle shadow"
            style={{
              width: "210px",
              height: "210px",
              objectFit: "cover",
              border: "4px solid white", // outline putih
            }}
          />
        </div>

        <h4 style={{ fontFamily: "'Dancing Script', cursive",
          fontSize: "2.1rem",
          marginBottom: "2rem",
         }}>
          Wahyu & Riski
        </h4>
        <p style={{
          fontSize: "1.2rem",
          marginBottom: "0.1rem"
        }}
        >Rabu, 15 Maret 2023</p>

        <button className="btn btn-outline-dark rounded-pill px-4 py-2 mt-2">
          <Calendar className="me-2" />
          Save Google Calendar
        </button>
      </section>

      {/* Bottom navbar */}
      <nav
        className="mt-auto bg-white shadow-sm py-2 d-flex justify-content-around border-top"
        style={{ position: "relative", zIndex: 2 }}
      >
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