import React from "react";
import NavbarLi from "./navbarLi";
import { linksNavbar } from "../data.js"


const Navbar = () => {
  return <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark  ">
    <div className="container-fluid ">
      <a className="navbar-brand text-white navbar-brand mb-0 h1 ps-4" href="#">
        Street Art
      </a>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ms-auto ps-5">
          { linksNavbar.map((link)=>{
            return <NavbarLi key={link} name={link}/>
          }) }
        </ul>
      </div>
    </div>
  </nav>

};

export default Navbar