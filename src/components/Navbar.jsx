import { React, useState } from "react";
import { Link } from "react-router-dom";

import { BsFacebook, BsLinkedin, BsTwitter, BsList } from "react-icons/bs";

function Navbar() {
  // change color of Nav on scroll
  const [navColor, setNavColor] = useState(false);
  const navColorControl = () => {
    if (window.scrollY >= 20) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };
  window.addEventListener("scroll", navColorControl);

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
      <div>
        <h1>
          <Link to="/">BOOKTREEPS.</Link>
        </h1>
      </div>
      {/* links */}

      <ul className="hidden lg:flex gap-6">
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
      </ul>

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
