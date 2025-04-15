import React, { useEffect, useState } from "react";
import "./Skills.css";
import images from "../../images/index";

const Skills = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.body.classList.contains("dark"));
    };
    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const imageSrc_github = isDarkMode ? images.github_dark : images.github_day;

  return (
    <section id="skills">
      <div className="skill-container">
        <div className="skill-text">
          <p>My Expertise are</p>
          <h2>Skills</h2>
        </div>
        <div className="skills">
          <figure>
            <img src={images.html} alt="html" />
            <figcaption>HTML</figcaption>
          </figure>
          <figure>
            <img src={images.css} alt="css" />
            <figcaption>CSS</figcaption>
          </figure>
          <figure>
            <img src={images.js} alt="JavaScript" />
            <figcaption>JavaScript</figcaption>
          </figure>
          <figure>
            <img src={images.sql} alt="MySQL" />
            <figcaption>MySQL</figcaption>
          </figure>
          <figure>
            <img src={images.python} alt="Python" />
            <figcaption>Python</figcaption>
          </figure>
          <figure>
            <img src={images.selenium} alt="Python" />
            <figcaption>Selenium</figcaption>
          </figure>
          <figure>
            <img src={imageSrc_github} alt="GitHub" />
            <figcaption>GitHub</figcaption>
          </figure>
          <figure>
            <img src={images.postman} alt="Postman" />
            <figcaption>Postman</figcaption>
          </figure>
          <figure>
            <img src={images.vscode} alt="VS Code" />
            <figcaption>VS Code</figcaption>
          </figure>
          <figure>
            <img src={images.jenkins} alt="VS Code" />
            <figcaption>Jenkins</figcaption>
          </figure>
          <figure>
            <img src={images.linux} alt="VS Code" />
            <figcaption>Linux</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Skills;
