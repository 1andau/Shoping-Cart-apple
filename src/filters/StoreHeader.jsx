import React from 'react';
import styles from '../filters/StoreHeader.module.scss';

const StoreHeader = () => {


  const footwareTypes = [
    { id: 1, title: 'Loafers',active: false},
    { id: 2, title: 'Sneakers',active: true },
    {id: 3, title: 'converse',active: false },
    {id: 4, title: 'dr.Martens' ,active: false},
  ];

  return (
    <div className={styles.styles}>
      <div className={styles.store_menu}>
        {footwareTypes.map((type, index) => (
          <div key={type.id} id={index.id} className={styles.store_menu_item}>
            <h2 className={`${styles.store_menu_title} ${type.active && styles.store_menu_title_active}`}
            >
              
              {type.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreHeader;
