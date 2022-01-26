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
          <NavLink style={{padding:0}} to='/' activeStyle>
            <a><img style={{height: '85px'}} src={logo}/></a>
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/live' activeStyle>
            Live
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