import React from "react";
import { Bars, Nav, NavIcon, NavLink, NavLogo } from "./NavbarEle";
import Logo from "../../images/logo.png";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <NavLogo src={Logo} alt="logo" />
        </NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
