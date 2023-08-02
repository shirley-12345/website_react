import React from "react";
import { Link } from "react-router-dom";
import { IoCameraOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
      <nav classname="navbar">
        <div classname="navbar-container">
          <Link to="/" classname="navbar-logo">
            <IoCameraOutline
              className="cameraicon"
              alignItems="right"
              size={50}
            />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
