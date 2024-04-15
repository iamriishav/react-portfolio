import { useRef } from "react";
import React from "react";
import images from "../../images/index";
import "./Navbar.css";
import { BiMenuAltRight } from "react-icons/bi";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("active");
  };

  return (
    <>
      <nav>
        <div className="logo">
          <a href="/">
            <h2>
              Rishav<span>.dev</span>
            </h2>
          </a>
        </div>
        <div className="nav-items" ref={navRef}>
          <img src={images.close} alt="close" id="close" onClick={showNavbar} />
          <ul>
            <li>
              <a href="#" onClick={showNavbar}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={showNavbar}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" onClick={showNavbar}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" onClick={showNavbar}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={showNavbar}>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <BiMenuAltRight id="ham" onClick={showNavbar} />
      </nav>
    </>
  );
}

export default Navbar;
