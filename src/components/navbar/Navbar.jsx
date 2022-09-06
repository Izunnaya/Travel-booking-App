import { useState } from "react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsLinkedin,
  BsTwitter,
  BsList,
  BsXLg,
} from "react-icons/bs";
import DesktopNavLinks from "./desktop-nav-menu/DesktopNavLinks";
import { MobileMenuDropDown } from "./mobile-nav-menu/MobileNav.styled";
import { Button } from "./mobile-nav-menu/MobileNav.styled";

function Navbar() {
  //========== State for handling  logo disappearin on smaller devices==========
  const [logo, setLogo] = useState(false);
  //===========End of State for handling logo Click =============

  //======State for handling Clicked Menu Display starting point============
  const [menuClick, setmenuClick] = useState(false);
  const menuHandler = () => {
    setmenuClick(!menuClick);
    setLogo(!logo);
  };
  //==============State for handling Clicked Menu Display ending point======

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
          ? "bg-black-90/70 main-nav nav-color-change "
          : "bg-black-100/90 main-nav"
      }
    >
      {/* hamburger menu */}
      <div onClick={menuHandler} className="hamburger-menu lg:hidden">
        {menuClick ? (
          <BsList className="text-4xl font-bold" />
        ) : (
          <BsList className="text-4xl font-bold" />
        )}
      </div>
      {/* logo */}
      <div className="logo">
        <h1
          onClick={menuHandler}
          className={logo ? "hidden md:block ease-out duration-500" : "block"}
        >
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
      <MobileMenuDropDown
        onClick={menuHandler}
        className={menuClick ? "absolute left-0" : "absolute left-[-100]"}
      >
        <ul className="text-black py-2">
          <div className="flex justify-between">
            <h1>BOOKTREEPS.</h1>
            <BsXLg className="text-2xl md:text-3xl font-bold" />
          </div>

          <li className="text-xl border-b border-black">
            <Link to="/">Home</Link>
          </li>
          <li className="text-xl border-b border-black">
            <Link to="/about">About</Link>
          </li>
          <li className="text-xl border-b border-black">
            <Link to="/hotels">Hotels</Link>
          </li>
          <li className="text-xl border-b border-black">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="text-xl border-b border-black">
            <Link to="/register">Register</Link>
          </li>
          <li className="text-xl border-b border-black">
            <Link to="/login">Login</Link>
          </li>
          <li className="text-xl border-b border-black">
            <Link to="/contact">Contact Us</Link>
          </li>
          <div className="flex flex-col mt-3">
            <Button className="my-3">Search</Button>
            <Button>Account</Button>
          </div>
        </ul>
      </MobileMenuDropDown>
    </div>
  );
}

export default Navbar;
