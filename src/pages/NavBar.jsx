import React from 'react';
import { useState } from 'react';
import {Nav, NavMenu, Bar,NavbarContainer,MenuButton, NavItem  } from './Navbar.elements'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCart } from '../redux/cartSlise';

function HamburgerButton() {
const [click, setClick] = useState(false); 
const [collectionClick, setCollectionClick] = useState(false); 
const [cartClick, setCartClick] = useState(false); 
const {items} = useSelector(selectCart); 
const totalCount = items.reduce((sum, item ) => sum + item.count, 0);

const handleCollectionClick = () => {
  setCollectionClick(true); 
  setCartClick(false); 
}
const handleCartClick = () => {
  setCartClick(true); 
  setCollectionClick(false); 
}


const handleClick = () => setClick(!click); 
const closeMobileMenu = () => setClick(false); 

const navigate = useNavigate(); 

  return (
    <Nav>
      <NavbarContainer>
        <h1 onClick={()=>navigate("/home")}className="NavLogo">Sneakers</h1>

        <MenuButton
          onClick={handleClick}
          className={click ? 'active' : ''}
          aria-label="open main menu">
          <Bar />
          <Bar />
          <Bar />
        </MenuButton>

        <NavMenu onClick={handleClick} click = {click}>
    
          <NavItem onClick={handleCollectionClick} collectionClick={collectionClick}>
            <Link className="NavLinks" to="/Home" onClick={closeMobileMenu}>
              Collection
            </Link>
          </NavItem>

          <NavItem onClick = {handleCartClick} cartClick={cartClick}>
            <Link className="NavLinks" to="/cart" onClick={closeMobileMenu}>
              Cart 🛒 {totalCount}
            </Link>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
}

export default HamburgerButton;
