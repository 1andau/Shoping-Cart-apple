 import React from 'react'
import Raiting from '../pages/assets/raiting.svg'; 
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
const PostPage = () => {
const {id} = useParams()
const [details, setDetails] = useState(); 
const navigate = useNavigate(); 

useEffect(() => {
  async function fetchDetails() {
    try {
      const { data } = await axios.get('https://6283ee0438279cef71de493c.mockapi.io/blogs/' + id);
      setDetails(data);
    } catch (error) {
      alert('Ошибка при получении!');
      navigate('/');
    }
  }
  fetchDetails();
}, []);

if (!details) {
  return 'loading...';
}





const onClickBy = () => {
  alert('olla, chika, youre  ' + details.price + '$')
}

   return (

     <div className="view_wrapper" id={details.id} >
       <div className="view_background">
       <img className='sneakers_image' src={details.imageUrl} alt="sneakers"  />
       </div>

       <div className="view_foreground">
         <div className="product_details">
           <div className="details_meta">
           <ul className='breadcrumb'>
           <li>home</li>
               <li>collection</li>
               <li>{details.category}</li>
           </ul>

                  {/* серийник */}
              <span className='details_id'>{details.productCode}</span>
           </div>
<div className="details_info">
  <h2>{details.name}</h2>
  <h3>{details.description}</h3>
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
<span className='action_buy' onClick={onClickBy}>buy in one click  $  
 </span>


 
  <div className='action_buy'>
                 
                  <span className='buy_text'>Add to Cart</span>
                   $ {details.price}
                </div>



                </div>

         </div>
       </div>
     </div>
   );
 }

 export default PostPage

