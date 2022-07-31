import React from 'react';
import CartProduct from './CartProduct';
import useShop from './context/FavContext';
import { useCart } from './context/FavContext';

const Cart = () =>  {
  const items = useCart();

  return (
    <div className="page">
      <div className="wrapper">
        <div className="items">
{items.map((cartItem) => (

<CartProduct cartItem={cartItem} key={cartItem.id} />

))}

        </div>
        <div className="checkout">
          <h2>Order Summary</h2>
          <div className="total_box">
            <div className="total_box_content">
              <div className="total_item">
                <div className="text">Bag Total</div>
                <div className="price">tottalcost</div>
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
                <div className="price">totalCost</div>
              </div>
            </div>
            <div className="checkout_footer">
              <button>Place Order</button>
            </div>
          </div>
        </div>
      </div>

      <button type="button" className={`${'toggle_btn'} ${'toggle_close'}`}>
        <span className="material-icons">keyboard_arrow_left</span>
      </button>
    </div>
  );
}

export default Cart;
