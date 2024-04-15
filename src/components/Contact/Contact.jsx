import React from "react";
import "./Contact.css";
// import { GrMapLocation, GrMail } from "react-icons/gr";
// import ReCAPTCHA from "react-google-recaptcha";

const contact = () => {
  // const onChange = () => {
  //   var recaptcha = document.getElementById("#g-recaptcha-response").val();
  //   if (recaptcha === "") {
  //     alert("Please check the recaptcha");
  //   }
  // };
  return (
    <>
      <section id="contact">
        <div className="contact-container">
          <div className="contact-title">
            <p>Contact me</p>
            <h2>
              <span>Let's</span> Talk
            </h2>
          </div>
          <div className="form">
            <form
              action="https://getform.io/f/b62f13c8-b83c-471f-9e18-40359e5186f2"
              method="POST"
              autocomplete="off"
            >
              <input type="hidden" name="_gotcha" id="honeypot"></input>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Enter your name"
              />
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter your email"
              />
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Enter your message"
                required
              ></textarea>
              {/* <ReCAPTCHA
                id="g-recaptcha-response"
                sitekey="6Lcai8ElAAAAAA_QaTfhHJKlxNf4Ur2IfvN4C4Si"
                onChange={onChange}
              /> */}
              <button type="submit">Send message</button>
            </form>
          </div>
          {/* <div className="contact-items">
            <div className="item">
              <div className="contact-img">
                <GrMapLocation className="con-img" />
              </div>
              <div className="contact-text">
                <h3>Location</h3>
                <p className="dhn">Dhanbad, Jharkhand</p>
              </div>
            </div>
            <div className="item">
              <div className="contact-img">
                <GrMail className="con-img" />
              </div>
              <div className="contact-text">
                <h3>Mail</h3>
                <a href="mailto:rajakrishav395@gmail.com">
                  rajakrishav395@gmail.com
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default contact;
