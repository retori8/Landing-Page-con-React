
import React from "react";

const NavbarLi = (props) => {
    return <li className="nav-item pe-4">
        <a className="nav-link active text-white" aria-current="page" href="#">
              {props.name}
        </a>
    </li>
};

export default NavbarLi