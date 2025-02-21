import './Navbar.scss';
import Logo from '../../assets/Logo.png';
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import {useState} from "react";

export const Navbar = () => {
const [showNav, setShowNav] = useState(false);
const toggle = () => setShowNav(false)

  return (
    // Add ARIA attributes and role

    <header className='navbar'>
        <nav className='navbar__container wrapper'>
            <a href='#' className="navbar__logo" onClick={toggle}>
                <img src={Logo} alt="logo" />
            </a>
            <ul className={`${showNav ? "show" : ""}`}>
                <li onClick={toggle}><a href="#">Product</a></li>  
                <li onClick={toggle}><a href="#">Company</a></li>  
                <li onClick={toggle}><a href="#">Pricing</a></li>  
                <li onClick={toggle}><a href="#">Blog</a></li>  

           </ul>
           <div className="navbar__btns">
            <a href="#">Login</a>
            <a href="#" className='btn'>Register</a>

           </div>
           <div className="navbar__menu" onClick={() => setShowNav(!showNav)}>
            {showNav ? <IoClose /> : <IoMenu />}
           </div>
        </nav>
    </header>
  )
}
 
export default Navbar;

