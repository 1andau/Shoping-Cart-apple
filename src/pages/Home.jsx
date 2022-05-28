import React, { useState } from 'react'
import SneakersBlock from './SneakersBlock'
import { useEffect } from 'react';
import axios from 'axios';
import AllCategories from './Category';
import NavBar from './NavBar';


function Home({}) {

    const [sneakers, setSneakers] = useState([]);
    const [customer, setCustomer] = useState(1);

    useEffect(() => {
        axios.get('http://localhost:3001/sneakers')
        .then( resp  => {
            setSneakers(resp.data);
            console.log(resp);
        })
        .catch(err => {
            console.log(err);
        })
      });



  return (

 <div className="content">
     <AllCategories
     customer={customer} customerChange={(e) => setCustomer(e)}
     />

     <div className="container">
     <div className='Card_container'>

{
    sneakers.map(obj => (

<SneakersBlock 
key={obj.id}
 {...obj}
imageUrl = {obj.imageUrl}
price = {obj.price}
/>


    ))
}

</div>
</div>
    </div>
  )
}

export default Home