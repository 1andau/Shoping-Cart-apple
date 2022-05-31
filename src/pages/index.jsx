import SneakersBlock from "./SneakersBlock";
import React from 'react'


function SneakersList({sneakers}) {
  return (
    <div className="Card_container">
        {sneakers.map((item) => (
            <SneakersBlock
            key={item.id} item={item}
            />

        ))}


    </div>
  )
}

export default SneakersList; 