import React from 'react'
import close from '../pages/assets/close.svg';
import { useDispatch } from 'react-redux';
import { removeItem, addItem, minusItem } from '../redux/cartSlise';


function CartProduct({imageUrl, price, customerType, category, name, count, totalCount,  id}) {

const dispatch = useDispatch();

const onClickPlus = () => {
  dispatch(
    addItem({
      id,
    }),
  );
};
const onClickMinus = () => {
  dispatch(minusItem(id))
}
  const onClickRemove = () => {
    if (window.confirm('Ты действительно хочешь удалить товар?')) {
      dispatch(removeItem(id));
    }
  };


  return (
<div className="item">
    <div className="item_wrapper">
        <div className="item_remove">
        <button type="button" onClick={onClickRemove}>
<img className='material-icons' src={close} alt="" />
          </button>
        </div>

        <div className="item_image">
            <img src={imageUrl} alt="images" />
        </div>

        <div className="item_details">
            <h3>            {name}</h3>
            <div className="item_meta">
            
            {customerType}

            {category}
            </div>
        </div>
        <div className="item_controller">

        <button type="minus"
        disabled={count === 1}
        onClick={onClickMinus}> 
            <i className="material-icons">-</i>
          </button>

          <span>{count}</span>
          <button type="button" onClick={onClickPlus}> 
            <i className="material-icons">+</i>
          </button>
        </div>
        <div className="item_price">
        {price * count} $
        </div>
    </div>
    </div>

)
}

export default CartProduct