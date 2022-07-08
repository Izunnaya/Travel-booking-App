import { React, useState } from "react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsLinkedin,
  BsTwitter,
  BsList,
  BsXLg,
} from "react-icons/bs";
import DesktopNavLinks from "./DesktopNavLinks";
import MobileNavLinks from "./mobile-nav-menu/MobileNavLinks";

function Navbar() {
  //==============State for handling Menu click starting point==================
  const [menuClick, setmenuClick] = useState(false);
  const menuHandler = () => {
    setmenuClick(!menuClick);
  };
  //==============State for handling Menu click ending point==================

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
  //================Change color of Nav on scroll Ending point================

  return (
    <div
      className={
        navColor
          ? "bg-black-100/90 main-nav nav-color-change "
          : "bg-black-100/90 main-nav"
      }
    >
      {/* hamburger menu */}
      <div onClick={menuHandler} className="hamburger-menu lg:hidden">
        {menuClick ? (
          <BsXLg className="text-2xl md:text-3xl font-bold" />
        ) : (
          <BsList className="text-4xl font-bold" />
        )}
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
      <div className=" flex gap-3 md:gap-4 text-xl ">
        <BsFacebook />
        <BsLinkedin />
        <BsTwitter />
      </div>

      {/* Mobile Menu Dropdown. */}
      <MobileNavLinks />
    </div>
  );
}

export default Navbar;
