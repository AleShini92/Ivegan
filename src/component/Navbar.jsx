import { Link } from 'react-router-dom';
import '../style/Nav.scss'
import SearchBar from "./SearchBar";
import SearchBarMenu from "./SearchBarmenu";
import vegan from "../img/logo-xs.svg"



import { useState } from "react";

export default function Navbar({ name, setName, handleSearch }) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleIcon = () => {
        setIsOpen(!isOpen);
    }

  return (
    <section className="container__nav sticky">
        <nav className={`navbar ${isOpen ? "expanded" : ""} d-flex space-between relative menu-navbar`}>
            {/* navigation menu */}
            <div className="item-menu menu-link d-flex gap-2">
                <ul>
                    <li><a>About us</a></li>
                    <li><a>Delivery</a></li>
                    <li><a>Contact Us</a></li>
                </ul>
            </div>
            {/* logo */}
            <h2>
                {/* Logo Ivegan */}
                <Link to='/'>
                    <img src={vegan} alt="" title=""/>
                </Link>
            </h2>
            {/* serchbar API */}
            <SearchBar name={name} setName={setName} onSearch={handleSearch} />
            
            {/* hamburger menu */}
            <div className="hamburger-menu">
                <div
                    id="nav-icon"
                    className={isOpen ? "open" : ""}
                    onClick={toggleIcon}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={`menu ${isOpen ? "show" : ""}`}>
                    <div className="menu-link d-flex gap-2">
                        <a className='pointer'>About Us</a>
                        <a className='pointer'>Delivery</a>
                        <a className='pointer'>Contact Us</a>
                    </div>
                </div>
            </div>
        </nav>
    </section>
  );
}