import React from 'react'
import { useState } from 'react';
import { data } from '../data/data';

 const Filters = React.memo(function Filters ({filterItem, setSneakers}) {
  const [active, setActive] = useState(null);

  
     return (
       <div className="tabs_controller">
         <div className="container_centered">
           <ul className="tab_menus">
           <li
            className={active === 1 ? 'active' : ''}
            onClick={() => setSneakers(data)}
          >
            Everyone
          </li>
          <li
            className={active === 2 ? 'active' : ''}
            onClick={() => filterItem(2)}
          >
            Men
          </li>
          <li
            className={active === 3 ? 'active' : ''}
            onClick={() => filterItem(3)}
          >
            Women
          </li>
          <li
            className={active === 4 ? 'active' : ''}
            onClick={() => filterItem(4)}
          >
            Unisex
          </li>
          <li
            className={active === 5 ? 'active' : ''}
            onClick={() => filterItem(5)}
          >
            Kids
          </li>
           </ul>
         </div>
       </div>
     );
    
    })
    
     export const StoreHeader = ({ customer, customerChange }) => {
      return (
        <>
          <Filters
            customerType={customer}
            typeSneakers={customerChange}
          />
        </>
      );
    };
export default Filters