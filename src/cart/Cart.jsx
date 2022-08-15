import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartProduct from './CartProduct';
import { selectCart, clearItems } from '../redux/cartSlise';
import CartEmpty from './CartEmpty';
import './cart.scss'; 
const Cart = () =>  {
const dispatch = useDispatch();
const { totalPrice, items } = useSelector(selectCart);
const totalCount = items.reduce((sum, item) => sum + item.count, 0);

const onClickClear = () => {
  if(window.confirm('clear cart?'))
  dispatch(clearItems())
}

const onClickOrder = () => {
  alert('order  '+ totalCount + '$')
}

if(!totalPrice){
  return <CartEmpty/>
}
  return (
    <div className="page">
      <div className="wrapper">
        <div className="items">
        <h5 className='clearCart' onClick={onClickClear}>clear cart</h5>
        <br /><br />
        {items.map((item) => (
            <CartProduct key={item.id} {...item} />
          ))}
        </div>
        <div className="checkout">
          <h2>Order Summary</h2>
          <div className="total_box">
            <div className="total_box_content">
              <div className="total_item">
                <div className="text">Bag Total</div>
                <div className="price"><p>{totalCount}</p></div>
              </div>
              <div className="total_item">
                <div className="text">Shipping</div>
                <div className="price">Free</div>
              </div>
              <div className={`${'total_item'} ${'coupon'}`}>
                <div className="text">Discount</div>
                <div className="price">0.00</div>
              </div>
              <div className="total_item">
                <div className="text">Total</div>
                <div className="price"> <p>{totalPrice} $</p></div>
              </div>
            </div>
            <div className="checkout_footer">
              <button onClick={onClickOrder}>Place Order</button>
            </div>
            
          </div>
        </div>
      </div>

    </div>
  );
}

export default Cart;
