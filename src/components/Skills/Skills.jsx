import React from "react";
import "./Skills.css";
import images from "../../images/index";

const skills = () => {
  return (
    <>
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
              <img src={images.sass} alt="sass" />
              <figcaption>Saas</figcaption>
            </figure>
            <figure>
              <img src={images.js} alt="JavaScript" />
              <figcaption>JavaScript</figcaption>
            </figure>
            <figure>
              <img src={images.php} alt="php" />
              <figcaption>PHP</figcaption>
            </figure>
            <figure>
              <img src={images.sql} alt="MySQL" />
              <figcaption>MySQL</figcaption>
            </figure>
            <figure>
              <img src={images.react} alt="React.JS" />
              <figcaption>React.JS</figcaption>
            </figure>
            <figure>
              <img src={images.mongodb} alt="MongoDB" />
              <figcaption>MongoDB</figcaption>
            </figure>
            <figure>
              <img src={images.java} alt="Java" />
              <figcaption>Java</figcaption>
            </figure>
            <figure>
              <img src={images.python} alt="Python" />
              <figcaption>Python</figcaption>
            </figure>
            <figure>
              <img src={images.cpp} alt="CPP" />
              <figcaption>C++</figcaption>
            </figure>
            <figure>
              <img src={images.github} alt="GitHub" />
              <figcaption>GitHub</figcaption>
            </figure>
            <figure>
              <img src={images.bootstrap} alt="BootStrap" />
              <figcaption>BootStrap</figcaption>
            </figure>
            <figure>
              <img src={images.tailwind} alt="Tailwind CSS" />
              <figcaption>Tailwind CSS</figcaption>
            </figure>
            <figure>
              <img src={images.postman} alt="Postman" />
              <figcaption>Postman</figcaption>
            </figure>
            <figure>
              <img src={images.vscode} alt="VS Code" />
              <figcaption>VS Code</figcaption>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
};

export default skills;
