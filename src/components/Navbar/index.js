import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/incomming' activeStyle>
            Incomming
          </NavLink>
          <NavLink to='/clips' activeStyle>
            Clips
          </NavLink>
          <NavLink to='/arts' activeStyle>
            Arts
          </NavLink>
          <NavLink to='/miscellaneous' activeStyle>
            Miscellaneous
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;