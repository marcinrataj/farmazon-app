import React from 'react';
import './Checkout.css'
import Subtotal from "../Subtotal/Subtotal";
import CheckoutProduct from "./CheckoutProduct/CheckoutProduct";
import { useStateValue } from '../StateProvider/StateProvider'


function Checkout(props) {
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img className='checkout__ad'
                     src="https://i.imgur.com/rOyB8uy.png"
                     alt=""
                />
                <div>
                    <h2 className='checkout__title'>Twój koszyk
                    </h2>

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
            <div className="checkout__right">
                <Subtotal/>

            </div>
        </div>
    );
}

export default Checkout;