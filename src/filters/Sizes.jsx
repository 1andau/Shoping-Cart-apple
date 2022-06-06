import React from 'react'

const Sizes = ({setSize,selectedSizes }) => {
    const sizes = ['36', '37', '38', '39', '40', '41', '42'];
  return (
    <div className="sizes">
      <h3>Sizes</h3>
      <div className="size-list">
        {sizes.map((size, index) => {
          return (
            <button
            className={ "size" + (selectedSizes.includes(size) ? " selected-size" : "")}
            key={index}
              onClick={() => {setSize(size);
              }}>
              {size}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Sizes