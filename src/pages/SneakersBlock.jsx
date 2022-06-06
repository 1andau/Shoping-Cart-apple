import React from 'react';
import Eye from '../pages/assets/heart.svg';
import { useNavigate } from 'react-router-dom';

const SneakersBlock = ({ item: { id, name, price, imageUrl, status } }) => {
  const navigate = useNavigate();

  return (

    <div className="product_card" onClick={() => navigate(`/sneakers/${id}`)}>
      
      <div className="card_image">
        <img src={imageUrl} alt="picture" />
      </div>

      <div className="card_status">{status === 2 && <span className="card_badge">NEW</span>}</div>

      <div className="card_content">
        <div className="card_info">
          <h3>{name}</h3>
          <p>{price}$</p>
        </div>

        <div className="card_meta">
          <img className="icons" src={Eye} alt="heart" />
        </div>
      </div>
    </div>
  );
};

export default SneakersBlock;
