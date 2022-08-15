import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/cartSlise';
import { Link } from 'react-router-dom';
import Noty from 'noty';
import './../../node_modules/noty/lib/noty.css';
import './../../node_modules/noty/lib/themes/relax.css'
import { selectCartItemById } from '../redux/cartSlise';

const SneakersBlock = ({  imageUrl, rating, status, price, id, name, liked = false, }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItemById(id))

const addedCount = cartItem ? cartItem.count : 0

const anAddToCart = () => {
  const item = {
    imageUrl,
    rating,
    price,   
    id,
    name,
  }
  dispatch(addItem(item)); 
  new Noty({
    layout: 'bottomCenter',
    progressBar: false,
    text: `<div style="display:flex; align-items: center;gap:15px;"><img width="40" src=${imageUrl} alt='sneaker' /> <div>Added to cart</div></div>`,
    theme: 'relax',
    timeout: 1000
  }).show();
};

 return (
   <div className="product_card" key={id}>
     <Link className='links' to={`/details/${id}`}> 
     <div className="" >
       <div className="card_image">
         <img src={imageUrl} alt='' />
       </div>

       <div className="card_status">{status === 2 && <span className="card_badge">NEW</span>}</div>

       <div className="card_content">
         <div className="card_info">
           <h3>{name}</h3>
           <p>{price }$</p>
         </div>
       </div>
     </div>
     
     </Link>
 

     {/* <div className={styles.sizes}>
<div className={styles.list}>
<button className={styles.size}  onClick={anAddToCart} >+</button>
</div>
</div> */}
<button className='AddButton' onClick={anAddToCart} >

      <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
     {addedCount > 0 && <i>{addedCount}</i>}
     </button>
   </div>

 );
};

export default SneakersBlock;
