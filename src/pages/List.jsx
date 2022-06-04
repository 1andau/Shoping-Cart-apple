import SneakersBlock from "./SneakersBlock";
import React, { useState, useEffect, Fragment } from 'react'

function SneakersList({sneakers}) {

const [loading, setLoading] = useState(true); 

useEffect(() => {
  setLoading(true);
  setTimeout(() => {
    setLoading(false)
  }, 1000);
}, [sneakers])


  return (


    <Fragment>

{
  loading ?
   <img src="https://career.alliedvision.com/persis/images_avt/gicccccphy.gif" alt="loader" className="loader" />

   : 

<>
<span className="products-length">{sneakers.length} Product(s) found.</span>

{
sneakers.length === 0 ? <p className="text-center">(</p> :



<section className="products_container">
<div className="containerSneakers">
<div className="grid_view">
{sneakers.map((item) => (
            <SneakersBlock
            key={item.id} item={item}
            />

        ))}

</div>


</div>


    


    </section>
}





</>



}



    </Fragment>
  

  )
}

export default SneakersList; 