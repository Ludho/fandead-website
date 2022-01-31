import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavbarElements';
import logo from "../../asset/logo.png"

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink style={{padding:0}} to='/' activestyle={NavLink}>
            <img style={{height: '85px'}} src={logo}/>
          </NavLink>
          <NavLink to='/about' activestyle={NavLink}>
            About
          </NavLink>
          <NavLink to='/live' activestyle={NavLink}>
            Live
          </NavLink>
          <NavLink to='/clips' activestyle={NavLink}>
            Clips
          </NavLink>
          <NavLink to='/arts' activestyle={NavLink}>
            Arts
          </NavLink>
          <NavLink to='/miscellaneous' activestyle={NavLink}>
            Miscellaneous
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;