import React from 'react'
import sneakers from '../pages/assets/sneakers.png'
import close from '../pages/assets/close.svg';

function CartProduct() {
  return (
<div className="item">
    <div className="item_wrapper">
        <div className="item_remove">
        <button type="button">
<img className='material-icons' src={close} alt="" />
          </button>
        </div>

        <div className="item_image">
            <img src={sneakers} alt="images" />
        </div>

        <div className="item_details">
            <h3>name</h3>
            <div className="item_meta">
            customerType
            category
            </div>
        </div>
        <div className="item_controller">
        <button type="button"> +
            <i className="material-icons">-</i>
          </button>

          <span>8</span>
          <button type="button"> -
            <i className="material-icons">+</i>
          </button>
        </div>
        <div className="item_price">
            100$
        </div>
    </div>
    </div>

)
}

export default CartProduct