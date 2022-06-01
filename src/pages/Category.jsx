import React from 'react'
import { useState } from 'react';

const FootwareMenus = React.memo(function FootwareMenus({}) {

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
          title: 'converse',
          active: false,
        },
        {
          id: 5,
          title: 'vance',
          active: false,
        },
        {
          id: 5,
          title: 'dr.Martens',
          active: false,
        },
      ];




  return (
    <div className="store_menu_wrapper">
      <div className="store_menu">
        {footwareTypes.map((type) => (
          <div key={type.id}
          id = {type.id}
          className="store_menu_item">

            
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
})



export default FootwareMenus; 