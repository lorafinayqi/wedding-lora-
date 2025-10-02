import React from "react";
import "./Preloader.css";

const Preloader = () => {
  return (
    <div className="preloader-wrapper">
      <div className="loader"></div>
      {/* bisa juga tambahkan teks: */}
      <div className="preloader-text">Loading </div>
    </div>
  );
};

export default Preloader;