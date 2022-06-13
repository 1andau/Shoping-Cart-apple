import React from 'react';
import close from '../pages/assets/close.svg';
import { useDispatchCart, useCart } from './context/FavContext';

 const FavoriteItems = ({product, index, handleRemove}) => {
   
  return (
    <div className="item">

      <div className="item_wrapper"> 
         <div className="item_remove"> 
           <button type="button"
           onClick={() => handleRemove(index)}
           >
            <img className="material-icons" src={close} alt="" />
          </button> 
         </div> 

         <div className="item_image">
          <img src={product.imageUrl} alt="images" />
        </div> 

         <div className="item_details">
          <h3>name</h3>
          <div className="item_meta">customerType category</div>
        </div> 

         <div className="item_price">
          {product.price.toLocaleString('en', {
            style: 'currency',
            currency: 'USD',
          })}
        </div> 
       </div> 
    </div>
  );
};

// export default FavoriteBlock; 

export default function FavoriteBlock() {
  // const { products, total } = useShop();

  const items = useCart();
  const dispatch = useDispatchCart();
  const totalPrice = items.reduce((total, b) => total + b.price, 0);

  const handleRemove = (index) => {
    dispatch({ type: 'REMOVE', index });
  };

  if (items.length === 0) {
    return (
      <main>
        <p>Cart is empty</p>
      </main>
    );
  }
  return (
    <main>
      <p>
        Total price:{' '}
        {totalPrice.toLocaleString('en', {
          style: 'currency',
          currency: 'USD',
        })}
      </p>
      
      {items.map((item, index) => (
        <FavoriteItems handleRemove={handleRemove} key={index} product={item} index={index} />
      ))}


    </main>
  );
}
