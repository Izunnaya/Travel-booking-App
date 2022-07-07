import { React, useState } from "react";
import { Link } from "react-router-dom";

import { BsFacebook, BsLinkedin, BsTwitter, BsList } from "react-icons/bs";
import DesktopNavLinks from "./DesktopNavLinks";

function Navbar() {
  //===========Change color of Nav on scroll starting point============
  const [navColor, setNavColor] = useState(false);
  const navColorControl = () => {
    if (window.scrollY >= 20) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };
  window.addEventListener("scroll", navColorControl);
  //==========================Change color of Nav on scroll Ending point================

  return (
    <div
      className={
        navColor
          ? "bg-black-100/90 main-nav nav-color-change "
          : "bg-black-100/90 main-nav"
      }
    >
      {/* hamburger menu */}
      <div className="hamburger-menu lg:hidden">
        <BsList className="text-4xl font-bold" />
      </div>
      {/* logo */}
      <div className="logo">
        <h1>
          <Link to="/">BOOKTREEPS.</Link>
        </h1>
      </div>
      {/* links */}
      <div className="navLinks">
        <DesktopNavLinks />
      </div>
      {/* social-links */}
      <div className=" flex gap-3 md:gap-4 text-xl pr-3">
        <BsFacebook />
        <BsLinkedin />
        <BsTwitter />
      </div>

      {/* Mobile Menu Dropdown. */}
      <div className="menuDropDown absolute left-0 top-0 bg-gray-100/90 w-10/12 md:w-6/12 lg:hidden px-4 py-7 flex flex-col">
        <ul>
          <h3>Beaches.</h3>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/hotels">Hotels</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <button>search</button>
          <button>Account</button>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
