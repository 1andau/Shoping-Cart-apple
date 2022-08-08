import React from 'react';
import { useState } from 'react';
import {Nav, NavMenu, Bar,NavbarContainer,MenuButton, NavItem  } from './Navbar.elements'
import { Link } from 'react-router-dom';

function HamburgerButton() {
const [click, setClick] = useState(false); 
const [collectionClick, setCollectionClick] = useState(false); 
const [cartClick, setCartClick] = useState(false); 
const [favoritesClick, setFavoritesClick] = useState(false); 


const handleCollectionClick = () => {
  setCollectionClick(true); 
  setCartClick(false); 
  setFavoritesClick(false); 
}
const handleCartClick = () => {
  setCartClick(true); 
  setCollectionClick(false); 
  setFavoritesClick(false); 
}
const handleFavoritesClick = () => {
  setFavoritesClick(true); 
  setCartClick(false); 
  setCollectionClick(false); 
}

const handleClick = () => setClick(!click); 
const closeMobileMenu = () => setClick(false); 


  return (
    <Nav>
      <NavbarContainer>
        <h1 className="NavLogo">Logo</h1>

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
              Cart 🛒
            </Link>
          </NavItem>

          <NavItem onClick={handleFavoritesClick} favoritesClick={favoritesClick}>
            <Link className="NavLinks" to="/FavoriteBlock" onClick={closeMobileMenu}>
              Favorites ❤️
            </Link>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
}

export default HamburgerButton;
