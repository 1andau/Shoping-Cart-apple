import React from 'react'
import { useState } from 'react';

const FootwareMenus = () => {


    const footwareTypes = [
        {
          id: 1,
          title: 'Loafers',
          active: false,
        },
        {
          id: 2,
          title: 'Sneakers',
          active: true,
        },
        {
          id: 3,
          title: 'Oxfords',
          active: false,
        },
        {
          id: 4,
          title: 'Chelsea Boots',
          active: false,
        },
        {
          id: 5,
          title: 'Slides',
          active: false,
        },
      ];




  return (
    <div className="store_menu_wrapper">
      <div className="store_menu">
        {footwareTypes.map((type) => (
          <div key={type.id} className="store_menu_item">

            
            <h2 className='store_menu_title'
         
            >
              {type.title}
            </h2>


       </div>
        ))}
      </div>
      <div className='fader'></div>
    </div>
    )
}




const TabsCategory = () => {
 const [active, setActive] = useState(); 



 return(



    <div className='tabs_controller'>
    <div className='container_centered'>
      <ul className='tab_menus'>

<li>Everyone</li>
<li>Men</li>
<li>Women</li>
<li>Unisex</li>
<li>Kids</li>

          </ul>
          </div>
          </div>
 )

}

const AllCategories = ({customer, customerChange }) => {

    return (
        <>
          <FootwareMenus />
          <TabsCategory
            customerType={customer}
            customerTypeChange={customerChange}
          />
        </>
      );


}

export default AllCategories