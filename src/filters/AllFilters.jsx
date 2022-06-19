import React from 'react'
import Checkbox from './Checkbox';
import { categoryList, ratingList } from '../data/data';

const AllFilters = ({
  selectedCategory,
  selectCategory,
  selectedRating,
  selectRating,
}) => {

  return (
    <div className=''>
<div className="tabs_controller">
  <div className="container_centered">
    <ul className='tab_menus'>
    <Checkbox
   options={categoryList}
   value={selectedCategory}
   selectToggle={selectCategory}
   
/>
    </ul>

</div>
  </div>



<div className="sizes">
<h3>Sizes</h3>
<div className="size-list">
<Checkbox
   options={ratingList}
   value={selectedRating}
   selectToggle={selectRating}
/>
</div>

</div>



  </div>
  )
}

export default AllFilters