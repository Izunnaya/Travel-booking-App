import { React } from "react";
import { Link } from "react-router-dom";
import { Button, MobileMenuDropDown } from "./MobileNav.styled";

const MobileNavLinks = () => {
  return (
    <MobileMenuDropDown>
      <ul className="text-black py-7">
        <h1>BOOKTREEPS.</h1>
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
        <div className="flex flex-col mt-8">
          <Button className="my-5">Search</Button>
          <Button>Account</Button>
        </div>
      </ul>
    </MobileMenuDropDown>
  );
};

export default MobileNavLinks;
