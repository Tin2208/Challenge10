import './Navbar.scss';
import Logo from './../../assets/trakor.svg';
import { CiMenuBurger } from "react-icons/ci";

import React from 'react'

const Navbar = () => {
  return   <nav className="navbar ">
  <div className="navbar__container wrapper ">
  <a href="#" className="navbar__logo">
    <img src={Logo} alt="logo" />
  </a>
  <div className="navbar__links">
    <a href="#" className="">
      Product
    </a>
    <a href="#" className="">
      Solutions
    </a>
    <a href="#" className="">
      Documentation
    </a>
    <a href="#" className="">
      Pricing
    </a>
  </div>
  <div className="navbar__buttons">
    <a href="#" className="navbar__login">
      Log in
    </a>
    <button className='btn--primary btns'>Request more info</button>

   <div className="navbar__menu">
    <CiMenuBurger />
   </div>
  </div>
  </div>
</nav>
}

export default Navbar