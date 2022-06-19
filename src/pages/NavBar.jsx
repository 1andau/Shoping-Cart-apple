import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import cart from '../pages/assets/cart.svg';
import redHeart from '../pages/assets/redHeart.svg';
import { useCart } from './context/FavContext';
function NavBar() {
  const navigate = useNavigate();

  const items = useCart();

  return (
    <div>
      <header className="header_navbar">
        <div className="container_navbar">
          <nav className="navbar">
            <h1>logo</h1>
            <button type="button" className="burger" id="burger">
              <span className="burger-line"></span>
              <span className="burger-line"></span>
              <span className="burger-line"></span>
            </button>
            <span className="overlay" id="overlay"></span>
            <div className="menu" id="menu">
              <ul className="menu-block">
                <Link className="menu-item" to="/">
                  {' '}
                  HOME
                </Link>
                <Link className="menu-item" to="/home">
                  {' '}
                  COLLECTION{' '}
                </Link>
                <img
                  onClick={() => {
                    navigate('/Cart');
                  }}
                  className="ShopCart"
                  src={cart}
                  alt=""
                  width="30px"
                  height="30px"
                />
                <img
                  onClick={() => {
                    navigate('/FavoriteBlock');
                  }}
                  className="ShopCart"
                  src={redHeart}
                  width="30px"
                  height="30px"
                  alt=""
                />
                ({items.length})
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default NavBar;
