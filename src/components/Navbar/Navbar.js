import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoCameraOutline } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { FaBars } from "react-icons/fa";
import { Button } from "../Button";
import './NavbarElement.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }



  window.addEventListener('resize', showButton)

  return (
    <>
      <nav className='navbar'>
        <div className="navbar-container">
          {/* ------------company logo here------------ */}
          <Link to="/" className="navbar-logo">
            <IoCameraOutline color='white'
              className="cameraicon"
              alignItems="right"
              size={50}
            />
          </Link>

          {/* ------------menu bar icon here------------ */}
          <div className="menu-icon">
            {click ? (
              <ImCross
                size={30}
                onClick={() => {
                  setClick(!click);
                }}
              />
            ) : (
              <FaBars
                size={30}
                onClick={() => {
                  setClick(!click);
                }}
              />
            )}
          </div>

          {/* ------------the list under bar icon------------ */}
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sign-up" className="nav-links" onClick={closeMobileMenu}>
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
