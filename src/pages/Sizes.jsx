import React from 'react';
import styles from '../scss/components/Filters.module.scss';

function Sizes({ onClickSize }) {
  const sizes = ['X', '37', '38', '39', '40', '41', '42'];
  return (
    <div className={styles.sizes}>
      <h3>Sizes</h3>
      <div className={styles.list}>
        {sizes.map((size, i) => {
          return (
            <button
              className={size === i ? styles.activeSize : ''}
              key={i}
              onClick={() => onClickSize(i)}>
              <p> {size}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Sizes;
