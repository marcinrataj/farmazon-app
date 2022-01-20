import React from 'react';
import './CheckoutProduct.css'
import {useStateValue} from "../../StateProvider/StateProvider";




function CheckoutProduct({id, image, title, price, rating}) {

    const [{basket}, dispatch] = useStateValue();
    const removeFromBasket = () => {
        //usuń przedmiot z koszyka
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }


    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} alt=""
            />
            <div className='checkoutProduct__info'>
                <p className='checkoutProduct_title'>{title}
                </p>
                <p className='checkoutProduct__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkoutProduct__rating'>
                    {Array(rating)      //jeśli w ratingu będzie numer 5 to będzie 5 gwiazdek
                        .fill()
                        .map((_,i) => (
                            <p>⭐</p>
                        ))}
                </div>
                <button onClick={removeFromBasket}>Usuń z koszyka</button>
            </div>
        </div>
    );
}

export default CheckoutProduct;