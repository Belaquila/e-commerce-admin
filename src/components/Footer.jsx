import React from "react";
import { FaGithub } from "react-icons/fa"


function Footer() {
  return (
    <footer className="footer">
      <a
        href="https://github.com/Belaquila/e-commerce-admin.git"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-link"
      >
        <FaGithub size={24} className="github-icon" />
        View on GitHub
      </a>
    </footer>
  );
}

export default Footer;