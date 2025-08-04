import React, { useContext } from 'react'
import './Placeorder.css'
import { Storecontext } from '../../context/Storecontext'

const Placeorder = () => {
  const { getTotalCartAmount } = useContext(Storecontext);
  return (
    <div className='place-order-container'>
      <div className="delivery-info">
        <h1>Delivery Information</h1>
        <form className='form-info'>
          <div className="form-design">
            <input type="text" placeholder='First name' />
            <input type="text" placeholder='Last name' />
          </div>
          <input type="email" placeholder='Email address'/>
          <input type="text" placeholder='Street'/>
          <div className="form-design">
            <input type="text" placeholder='City' />
            <input type="text" placeholder='State' />
          </div>
          <div className="form-design">
            <input type="text" placeholder='Zip code' />
            <input type="text" placeholder='Country' />
          </div>
          <input type="number" placeholder='Phone'/>
        </form>
      </div>

      <div className="place-order-right">
        <h2>Cart Totals</h2>
        <div className="cart-total-elements">
          <p>Subtotal</p>
          <p>₹{getTotalCartAmount()}</p>
        </div>
        <hr />
        <div className="cart-total-elements">
          <p>Delivery Fee</p>
          <p>₹{0}</p>
        </div>
        <hr />
        <div className="cart-total-elements">
          <p className='total-bold'><b>Total</b></p>
          <p>₹{getTotalCartAmount()}</p>
        </div>
        <button className='cart-total-btn' type='button'>PROCEED TO PAYMENT</button>
      </div>
    </div>
  )
}

export default Placeorder
