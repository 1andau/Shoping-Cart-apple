import React, { useState } from 'react'
import FootwareMenus from './Category';
import Filters from './Filters';
import {data} from '../data/data'; 
import SneakersList from '.';

function Home() {
    const [sneakers, setSneakers] = useState(data);


    const filterItem = (event) => {
        const newItem = data.filter((newVal) => {
            return newVal.typeSneakers === event; 
        })
        setSneakers(newItem);  
    }

  return (
    <div className="content">
      <FootwareMenus  />

      <Filters 
  filterItem={filterItem}  
  setSneakers = {setSneakers}
  />

  

      <div className="container">
        <div className="Card_container">

       <SneakersList sneakers={sneakers}/>
        </div>
      </div>
    </div>
  );
}

export default Home