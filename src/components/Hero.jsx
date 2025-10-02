import { EnvelopeFill } from "react-bootstrap-icons";
import confetti  from "canvas-confetti";
import "./Hero.css"; // buat animasi bounce

export default function Hero() {
  const handleOpen = () => {
  const end = Date.now() + 3 * 1000; // durasi 3 detik
  const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"]; // warna custom wedding vibes

  const frame = () => {
    if (Date.now() > end) return;

    // Tembakan kiri
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      startVelocity: 60,
      origin: { x: 0, y: 0.5 },
      colors: colors,
    });

    // Tembakan kanan
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      startVelocity: 60,
      origin: { x: 1, y: 0.5 },
      colors: colors,
    });

    requestAnimationFrame(frame);
  };

  frame();

  // Scroll ke bagian about
  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
};

  return (
    <section
      id="hero"
      className="d-flex flex-column justify-content-center align-items-center text-center min-vh-100 bg-light w-100"
    >
      {/* Judul */}
      <h1
        className="fw-light mb-4"
        style={{ fontFamily: "'Dancing Script', cursive" }}
      >
        The Wedding Of
      </h1>

      {/* Foto Couple */}
      <div className="mb-4">
        <img
          src="img/cewe.webp"
          alt="Couple"
          className="rounded-circle shadow"
          style={{
            width: "160px",
            height: "160px",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Nama */}
      <h2
        className="fw-light mb-4"
        style={{ fontFamily: "'Dancing Script', cursive" }}
      >
        Wahyu & Riski
      </h2>

      {/* Tombol dengan ikon bounce */}
      <button
        className="btn btn-dark d-flex align-items-center gap-2 px-4 py-2 shadow-lg mx-auto"
        onClick={handleOpen}
      >
        <EnvelopeFill className="bounce-icon" />
        Open Invitation
      </button>
    </section>
  );
}