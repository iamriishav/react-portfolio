import React from "react";
import images from "../../images/index";
import "./Hero.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home">
      <div className="hero-container">
        <div className="hero-bg"></div>
        <div className="hero-text">
          <h2>
            Front-End Developer
            <img src={images.wave} alt="hand" />
          </h2>
          <p>
            Hi, I'm Rishav. A passionate Front End Developer based in
            Jharkhand, India. 📍
          </p>
          <div className="social">
            <a href="https://linkedin.com/in/iamriishav" target="_blank">
              <FaLinkedin />
              <p>Linkedin</p>
            </a>
            <a href="https://github.com/iamriishav" target="_blank">
              <FaGithub />
              <p>Github</p>
            </a>
          </div>
        </div>
        <div className="hero-img">
          <img src={images.developer} alt="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
