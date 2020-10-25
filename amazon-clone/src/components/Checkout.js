import React from 'react'
import './Checkout.css';
import Subtototal from './Subtotal';

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkoutLeft">
            <img className="checkoutAd" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"/>
            <div>
                <h2 className="checkoutTitle">Your shopping Basket</h2>
            </div>
            </div>
            <div className="checkoutRight">
                <Subtototal/>
            </div>
        </div>
    )
}

export default Checkout
