import React from 'react';
import heart from '../pages/assets/heart.svg';
import redHeard from '../pages/assets/redHeart.svg'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatchCart } from './context/FavContext';

const SneakersBlock = ({  imageUrl, rating, status, price, id, name, product, liked = false, }) => {
  const navigate = useNavigate();
  
  const [like, setLike] = useState(liked); 
  const dispatch = useDispatchCart();


//  function showProductDetails(id) {
  //   navigate(`/details/${id}${name}`);
  // }


  const addToCart = (item) => {
    setLike(!like) 
    dispatch({ type: "ADD", item });
  };



 return (
   <div className="product_card" key={id}>
     <div className="" >
       <div className="card_image">
         <img src={imageUrl} />

       </div>

       <div className="card_status">
         {status === 2 && <span className="card_badge">NEW</span>}       
           <span>🌟{rating}</span>

       </div>

       <div className="card_content">
         <div className="card_info">
           <h3>{name}</h3>
           <p>{price}$</p>
         </div>
       </div>
     </div>

     {/* сюда импортну FavoriteBlock */}
     <div className="card_meta">
       <img
         onClick={() => addToCart(product)}
         key = {product}
         className="icons"
         src={like ? redHeard : heart}
         alt="heart"
       />


     </div>
   </div>
 );
};

export default SneakersBlock;
