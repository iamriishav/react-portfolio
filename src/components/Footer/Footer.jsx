import React from "react";
import "./Footer.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const footer = () => {
  return (
    <>
      <section id="footer">
        <div className="footer-container">
          <div className="footer-left">
            <p>
              Created with ❤️ by Rishav
            </p>
          </div>
          <div className="footer-right">
            <div className="social-links">
              <a
                href="https://linkedin.com/in/iamriishav"
                target="_blank"
                aria-label="linkedin"
              >
                <FaLinkedin name="Linkedin" className="footer-social-icon"/>
              </a>
              <a
                href="https://github.com/iamriishav"
                target="_blank"
                aria-label="twitter"
              >
                <FaGithub name="GitHub" className="footer-social-icon"/>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default footer;
