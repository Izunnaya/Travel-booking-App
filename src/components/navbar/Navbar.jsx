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
      <div className=" flex gap-2 md:gap-4 text-xl">
        <BsFacebook />
        <BsLinkedin />
        <BsTwitter />
      </div>
    </div>
  );
}

export default Navbar;
