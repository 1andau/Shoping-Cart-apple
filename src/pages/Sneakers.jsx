import React from 'react';
import heart from '../pages/assets/heart.svg';
import redHeard from '../pages/assets/redHeart.svg'
import { useState } from 'react';

const SneakersBlock = ({  imageUrl, rating, status, price, id, name, product, liked = false, }) => {
  
  const [like, setLike] = useState(liked); 

 return (
   <div className="product_card" key={id}>
     <div className="" >
       <div className="card_image">
         <img src={imageUrl}  />
       </div>

       <div className="card_status">
         {status === 2 && <span className="card_badge">NEW</span>}       
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
        //  onClick={() => addToCart(product)}
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
