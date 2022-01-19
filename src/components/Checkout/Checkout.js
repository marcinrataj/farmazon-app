import React from 'react';
import './Checkout.css'

function Checkout(props) {
    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img className='checkout_ad' src="https://i.imgur.com/rOyB8uy.png" alt=""
                />
                <div>
                    <h2 className='checkout__title'></h2>
                </div>
            </div>
        </div>
    );
}

export default Checkout;