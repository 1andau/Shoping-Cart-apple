 import React from 'react'
import Raiting from '../pages/assets/raiting.svg'; 
import { useParams } from 'react-router-dom';
import { data } from '../data/data';
const PostPage = () => {
  
  const {productId} = useParams()
  const thisProduct = data.find(prod => prod.id === productId)
 

   return (

     <div className="view_wrapper" id={thisProduct.id} >
       <div className="view_background">
       <img className='sneakers_image' src={thisProduct.imageUrl} alt="sneakers"  />
       </div>

       <div className="view_foreground">
         <div className="product_details">
           <div className="details_meta">
           <ul className='breadcrumb'>
           <li>home</li>
               <li>collection</li>
               <li>{thisProduct.category}</li>
           </ul>

                  {/* серийник */}
              <span className='details_id'>{thisProduct.productCode}</span>
           </div>
<div className="details_info">
  <h2>{thisProduct.name}</h2>
  <h3>{thisProduct.description}</h3>
</div>
<div className="details_more">


  <div className="ratings_revieww">
<div className="r_count">
 77 Reviews
</div>
<div className="stars">
<img src={Raiting} alt="" />
</div>
  </div>
</div>


  <div className="details_actions">
<span className='action_buy'>buy in one click  $  
 </span>


 
  <div className='action_buy'>
                 
                  <span className='buy_text'>Add to Cart</span>
                   $ {thisProduct.price}
                </div>



                </div>

         </div>
       </div>
     </div>
   );
 }

 export default PostPage

