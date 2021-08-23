import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import agrikonLogos from '../images/agrikonLogos.png';
import underline from '../images/underline.png';
import search from '../images/search.png';
import cart from '../images/cart.png';

const Navigation = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

  return (
/*   <header> */
    <Navbar className="container" color="faded" light expand="lg">
        <NavbarBrand href="/">
        <img src={agrikonLogos} alt="" width="100" height="24" class="d-inline-block align-text-top" />
        </NavbarBrand>
        <NavbarToggler id="toggler" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" id="centeringNav" navbar>
            <NavItem >
              <NavLink href="/components/" style={{fontWeight:"bold"}}>Home</NavLink>
              <img src={underline} alt=""/>
            </NavItem>
            <NavItem>
              <NavLink href="/components/"  style={{fontWeight:"bold"}}>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/"  style={{fontWeight:"bold"}}>Pages</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/"  style={{fontWeight:"bold"}}>Project</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/"  style={{fontWeight:"bold"}}>News</NavLink>
            </NavItem>
           <NavItem>
              <NavLink href="/components/"><img src={search} alt=""/></NavLink>
            </NavItem>
            <NavItem >
              <NavLink href="/components/"><img src={cart} alt=""/></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
 /*  </header> */
  );
}

export default Navigation;