import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Rondell Jefferson Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
