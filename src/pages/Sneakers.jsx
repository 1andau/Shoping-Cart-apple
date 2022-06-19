import React from 'react';
import heart from '../pages/assets/heart.svg';
import redHeard from '../pages/assets/redHeart.svg'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatchCart } from './context/FavContext';

const SneakersBlock = ({ product, liked = false,id }) => {
  const navigate = useNavigate();
  
  const [like, setLike] = useState(liked); 
  const dispatch = useDispatchCart();


 function showProductDetails(id) {
    navigate(`/products/${product.id}`);
  }

  const addToCart = (item) => {
    setLike(!like) 
    dispatch({ type: "ADD", item });
  };




 return (
   <div className="product_card" key={product._id}>
     <div className="" onClick={() => showProductDetails(product)}>
       <div className="card_image">
         <img src={product.imageUrl} />

       </div>

       <div className="card_status">
         {product.status === 2 && <span className="card_badge">NEW</span>}         <span>🌟{product.rating}</span>

       </div>

       <div className="card_content">
         <div className="card_info">
           <h3>{product.name}</h3>
           <p>{product.price}$</p>
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
