import React from 'react'
import './Checkout.css';
import Subtototal from './Subtotal';
import {useStateValue} from "./StateProvider"
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{basket,user}, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkoutLeft">
            <img className="checkoutAd" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"/>
            <div>
                <h3>Hello, {user?.email}</h3>
                <h2 className="checkoutTitle">Your shopping Basket</h2>
                {basket.map(item =>(
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}

                    />
                ))}
            </div>
            </div>
            <div className="checkoutRight">
                <Subtototal/>
            </div>
        </div>
    )
}

export default Checkout
