import React from 'react';
const StoreHeader = ({}) => {
  const footwareTypes = [
    { id: 1, title: 'Loafers',active: false},
    { id: 2, title: 'Sneakers',active: true },
    {  id: 3, title: 'Oxfords',active: false },
    { id: 4, title: 'Chelsea Boots',active: false },
    {id: 5, title: 'converse',active: false },
    {id: 6, title: 'dr.Martens' ,active: false},
  ];

  return (
    <div className="store_menu_wrapper">
      <div className="store_menu">
        {footwareTypes.map((type, index) => (
          <div key={type.id} id={index.id} className="store_menu_item">
            <h2 className={`${'store_menu_title'} ${type.active && 'store_menu_title_active'}`}

            >
              
              {type.title}</h2>
          </div>
        ))}
      </div>
      <div className="fader"></div>
    </div>
  );
};

export default StoreHeader;
