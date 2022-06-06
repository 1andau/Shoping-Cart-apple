 import React from 'react'
import Raiting from '../pages/assets/raiting.svg'; 
import nike from '../pages/assets/sneakers.png'
import { useParams } from 'react-router-dom';
import { data } from '../data/data';
import Sizes from '../filters/Sizes';


const PostPage = ({}) => {
  const {productId} = useParams()
  const thisProduct = data.find(prod => prod.id === productId)
  

   return (

     <div className="view_wrapper" >
       <div className="view_background">
       <img src={thisProduct.imageUrl} alt="sneakers"  width={800}/>
       </div>

       <div className="view_foreground">
         <div className="product_details">
           <div className="details_meta">
           <ul className='breadcrumb'>
           <li>home</li>
               <li>collection</li>
               <li>{thisProduct.category}</li>
               <li>{thisProduct.customerType}</li>
           </ul>

                  {/* серийник */}
              <span className='details_id'>{thisProduct.productCode}</span>
           </div>
<div className="details_info">
  <h2>{thisProduct.name}</h2>
  <h3>{thisProduct.description}</h3>
</div>
<div className="details_more">

  <div className="colors">
  colors
  </div>

  <div className="ratings_revieww">
<div className="r_count">
  ratings// 77 Reviews
</div>
<div className="stars">
<img src={Raiting} alt="" />
</div>
  </div>
</div>
<div className="price_big">
<h1>10000$</h1>
  </div>

  <div className="details_actions">
<span className='action_buy'>buy in one click</span>


 
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

