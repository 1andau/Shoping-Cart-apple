import React from 'react'
import { useState } from 'react';
import { data } from '../data/data';



    function Filters ({filterItem, setSneakers}) {
      const [active, setActive] = useState(1);

  
     return (
       <div className="tabs_controller">
         <div className="container_centered">
           <ul className="tab_menus">
           <li
            className={active === 1 ? 'active_tab' : ''}
            onClick={() => setSneakers(data)}
          >
            Everyone
          </li>
          <li
            className={active === 2 ? 'active_tab' : ''}
            onClick={() => filterItem(2)}
          >
            Men
          </li>
          <li
            className={active === 3 ? 'active_tab' : ''}
            onClick={() => filterItem(3)}
          >
            Women
          </li>
          <li
            className={active === 4 ? 'active_tab' : ''}
            onClick={() => filterItem(4)}
          >
            Unisex
          </li>
          <li
            className={active === 5 ? 'active_tab' : ''}
            onClick={() => filterItem(5)}
          >
            Kids
          </li>
           </ul>
         </div>
       </div>
     );
    
    }
    
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