import React from 'react'
import styles from '../toggle/Toggle.module.scss';
const Toggle = ({value, onChange}) => {
  console.log(onChange);
  return (
    <div>
    <label className={styles.root} htmlFor="toggler">
    <input 
      id="toggler"
      type="checkbox"
      onClick={onChange}
      checked={value}
      readOnly
     />

    <span className={styles.slider} />
    <span className={styles.wave} />
    
    </label>
    </div>
  )
}

export default Toggle