import React from 'react';
import './Checkout.css'
import Subtotal from "../Subtotal/Subtotal";

function Checkout(props) {
    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img className='checkout__ad'
                     src="https://i.imgur.com/rOyB8uy.png"
                     alt=""
                />
                <div>
                    <h2 className='checkout__title'>
                        Twój koszyk</h2>
                    {/*Basket Item*/}
                    {/*Basket Item*/}
                    {/*Basket Item*/}
                    {/*Basket Item*/}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal/>
                <h2></h2>
            </div>
        </div>
    );
}

export default Checkout;