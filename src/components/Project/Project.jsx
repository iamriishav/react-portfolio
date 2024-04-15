import React from "react";
import "./Project.css";
import images from "../../images/index";
import { RiExternalLinkLine, RiGithubFill } from "react-icons/ri";

const project = () => {
  return (
    <>
      <section id="projects">
        <div className="project-container">
          <div className="project-title">
            <p>Portfolio</p>
            <h2>
              <span>Creative</span> Work
            </h2>
          </div>
          <div className="pro">
            <div className="pro-img">
              <a href="https://ridewithmecabservice.000webhostapp.com/">
                <img src={images.proCab} alt="Cab Booking" />
              </a>
            </div>
            <div className="pro-text">
              <h2>Cab Rental</h2>
              <p>
                A car rental website is an online platform that allows users to
                rent cars for personal or business use. The website provides an
                interface for searching, comparing, and reserving cars.
              </p>
              <div className="tools">
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
                <p>php</p>
                <p>MySQL</p>
                <p>Tailwind</p>
              </div>
              <div className="links">
                <a
                  href="https://github.com/iamriishav/Ride-With-Me---Cab-Service"
                  target="_blank"
                >
                  <p>Github</p>
                  <RiGithubFill />
                </a>
                <a
                  href="https://ridewithmecabservice.000webhostapp.com/"
                  target="_blank"
                >
                  <p>Live</p>
                  <RiExternalLinkLine />
                </a>
              </div>
            </div>
          </div>
          <div className="pro pro-inverse">
            <div className="pro-text">
              <h2>Lawyeric</h2>
              <p>
                Lawyeric is a web application that provides legal services such
                as legal document preparation, lawyer consultation, and document
                delivery.
              </p>
              <div className="tools">
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
                <p>php</p>
                <p>MySQL</p>
              </div>
              <div className="links">
                <a
                  href="https://github.com/iamriishav/lawyeric"
                  target="_blank"
                >
                  <p>Github</p>
                  <RiGithubFill />
                </a>
                <a href="https://lawyeric.000webhostapp.com/" target="_blank">
                  <p>Live</p>
                  <RiExternalLinkLine />
                </a>
              </div>
            </div>
            <div className="pro-img">
              <a href="https://github.com/iamriishav/lawyeric">
                <img src={images.lawyeric} alt="Lawyeric" />
              </a>
            </div>
          </div>
          <div className="pro">
            <div className="pro-img pro-img2">
              <a href="https://yourdailyquotes.netlify.app/">
                <img src={images.proQuote} alt="Daily Quotes" />
              </a>
            </div>
            <div className="pro-text">
              <h2>Daily Quotes</h2>
              <p>
                Daily quotes provide everyday new inspiration, motivation, and
                wisdom from our user-friendly quotes website featuring fresh
                selections from various sources. Share and explore today!
              </p>
              <div className="tools">
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
              </div>
              <div className="links">
                <a
                  href="https://github.com/iamriishav/yourdailyquotes"
                  target="_blank"
                >
                  <p>Github</p>
                  <RiGithubFill />
                </a>
                <a href="https://yourdailyquotes.netlify.app/" target="_blank">
                  <p>Live</p>
                  <RiExternalLinkLine />
                </a>
              </div>
            </div>
          </div>
          <div className="pro pro-inverse">
            <div className="pro-text">
              <h2>Weather App</h2>
              <p>
                Get real-time weather updates for your city and browse
                pre-defined cities with our user-friendly weather app.
              </p>
              <div className="tools">
                <p>React.JS</p>
                <p>CSS</p>
                <p>Openweathermap</p>
              </div>
              <div className="links">
                <a href="https://github.com/iamriishav/skyline" target="_blank">
                  <p>Github</p>
                  <RiGithubFill />
                </a>
                <a href="https://skylineweather.vercel.app/" target="_blank">
                  <p>Live</p>
                  <RiExternalLinkLine />
                </a>
              </div>
            </div>
            <div className="pro-img pro-img3">
              <a href="https://skylineweather.vercel.app/">
                <img src={images.weather} alt="Skyline" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default project;
