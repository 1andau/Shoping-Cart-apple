import React from 'react';
import styles from '../scss/components/Filters.module.scss'

  function Categories({ onClickCategory}) {
    const categoryNames = ['All','Men','Women', 'Kids'];
return (
<div className={styles.tabs_controller} >
    <div className={styles.container_centered}>
    <ul className={styles.tab_menus}>
{categoryNames.map((items, i) => (
  <li key={i}
  onClick={() => onClickCategory (i)}
  className={items === i ? styles.active_tab : ''}
  >
      {items}

  </li>
))}
 </ul>

    </div>

      
  </div>
       );
     }






export default Categories;



