import React from "react";
import images from "../../images/index";
import "./About.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const about = () => {
  return (
    <>
      <section id="about">
        <h2 className="about-heading">About me</h2>
        <div className="about-container">
          <div className="about-img">
            <div className="cardContainer">
              <div className="profileDiv">
                <img src={images.profile} alt="profile photo" />
              </div>
              <div className="infoDiv">
                <div className="nameDiv">
                  <p className="name">Rishav Kumar Rajak</p>
                  <p className="role">Frontend Developer</p>
                </div>
                <div className="socialDiv">
                  <a href="https://facebook.com/iamriishav/" target="_blank">
                    <FaFacebook />
                  </a>

                  <a href="https://instagram.com/iamriishav/" target="_blank">
                    <FaInstagram />
                  </a>

                  <a href="https://x.com/iamriishav" target="_blank">
                    <FaSquareXTwitter />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="about-text">
            <h2>
              Hii,
              <img src={images.hand} alt="hand" />
            </h2>
            <p>
              I’m an aspiring engineer, tech-savvy, and a pragmatic developer
              wandering around the tech fields to bring creativity to life. My
              name is <span>Rishav Kumar Rajak</span>.
            </p>
            <br />
            <p>
              As a Front-End Developer, I possess an impressive arsenal of
              skills in HTML, CSS, Sass, JavaScript, React and Tailwind CSS. I
              excel in designing and maintaining responsive websites that offer
              a smooth user experience. My expertise lies in crafting dynamic,
              engaging interfaces through writing clean and optimized code and
              utilizing cutting-edge development tools and techniques. I am also
              a team player who thrives in collaborating with cross-functional
              teams to produce outstanding web applications.
            </p>
            <a href={images.resume} target="_blank">
              Resume
            </a>
          </div>
        </div>
        <div className="education-container">
          <div className="education-text">
            <h2>Education</h2>
          </div>
          <div className="education-items">
            <a href="https://www.bitsindri.ac.in/" target="_blank">
              <div className="edu-item">
                <div className="education-img">
                  <img src={images.edu} alt="edu" />
                </div>
                <div className="education-details">
                  <p>2019 - 2023</p>
                  <h2>BIT Sindri</h2>
                  <p>Bachelor's Degree in Information Technology.</p>
                  {/* <p> */}
                    {/* CGPA: <span>8.06</span>
                  </p> */}
                </div>
              </div>
            </a>
            <a href="https://www.spmintercollege.in/" target="_blank">
              <div className="edu-item">
                <div className="education-img">
                  <img src={images.edu} alt="edu" />
                </div>
                <div className="education-details">
                  <p>2017 - 2019</p>
                  <h2>Dr. SPM Inter College</h2>
                  <p>Secondary Education in Maths.</p>
                  {/* <p>
                    CGPA: <span>6.18</span>
                  </p> */}
                </div>
              </div>
            </a>
            <a href="http://svmsindri.com/" target="_blank">
              <div className="edu-item">
                <div className="education-img">
                  <img src={images.edu} alt="edu" />
                </div>
                <div className="education-details">
                  <p>2017</p>
                  <h2>SVM Sindri</h2>
                  <p>High School, CBSE</p>
                  {/* <p>
                    CGPA: <span>9</span>
                  </p> */}
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default about;
