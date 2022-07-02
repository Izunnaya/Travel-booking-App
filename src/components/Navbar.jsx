import React from 'react'
import { Link } from 'react-router-dom'

import { BsFacebook } from "react-icons/bs";

function Navbar() {
  return (
      <div className='h-20 bg-black text-white flex justify-between px-7 items-center'>
          {/* hamburger menu */}
          <div className='hamburger-menu text-white lg:hidden'>hamburger menu</div>
          {/* logo */}
          <div>
              <h1>
                  <Link to="/">BookTreeps.</Link>
              </h1> 
          </div>
          {/* links */}
          <div className='hidden lg:flex'>links</div>
          {/* social-links */}
          <div>
            <BsFacebook/>
          </div>
      </div>
  )
}

export default Navbar