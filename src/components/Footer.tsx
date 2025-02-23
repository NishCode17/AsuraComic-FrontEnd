// components/Footer.tsx
import React from "react";
import "./Footer.css"; // Import the corresponding CSS file for the footer

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/dmca">DMCA</a>
        <a href="/terms-of-service">Terms Of Service</a>
      </div>
      <div className="footer-image">
        <a href="/">
          <img src="./logo.png" alt="Back to Home" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
